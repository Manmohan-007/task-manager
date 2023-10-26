// import { useEffect } from "react";
import { useLocalStorage, useNotification } from "common";
import { useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import {
  IFilters,
  IStatus,
  ITask,
  selectedTaskFilterState,
  taskListState,
} from "views"; // Assuming taskListState is defined in state.ts

interface TaskLists {
  allTasksList: ITask[];
  filteredTasksList: ITask[];
}

export function useTaskManager() {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();

  const [taskLists, setTaskLists] = useRecoilState<TaskLists>(taskListState);
  const [selectedTaskFilter, setSelectedTaskFilter] = useRecoilState(
    selectedTaskFilterState
  );
  const { successNotification } = useNotification();

  const { allTasksList } = taskLists;

  const filteredList = useMemo(() => {
    return allTasksList.filter(({ status }) => {
      return selectedTaskFilter.includes(status as IFilters);
    });
  }, [allTasksList, selectedTaskFilter]);

  const createTask = (task: Omit<ITask, "id">) => {
    const newTask: ITask = {
      ...task,
      id: uuidv4(),
    };
    const payload = {
      ...taskLists,
      allTasksList: [...allTasksList, newTask],
    };
    setTaskLists(payload);
    setLocalStorage("tasks", payload);
    successNotification("Task created successfully");
  };

  const updateTask = (_taskId: string) => {
    // we need id if we will use the api and db
    setLocalStorage("tasks", taskLists);
    successNotification("Task updated successfully");
  };

  const changeTaskStatus = (taskId: string, status: IStatus) => {
    const updatedList = allTasksList.map((task) =>
      task.id === taskId ? { ...task, status } : task
    );
    const payload = {
      ...taskLists,
      allTasksList: [...updatedList],
    };
    setTaskLists(payload);
    successNotification("Task status changed");
  };

  const deleteTask = (taskId: string) => {
    const updatedList = taskLists.allTasksList.filter(
      (task) => task.id !== taskId
    );
    const payload = {
      ...taskLists,
      allTasksList: [...updatedList],
    };
    setTaskLists(payload);
    setLocalStorage("tasks", payload);
    successNotification("Task deleted successfully");
  };

  const changeFilter = (selectedOptions: string[]): void => {
    const updatedFilter: IFilters[] = selectedOptions as IFilters[];
    setSelectedTaskFilter(updatedFilter);
  };

  useEffect(() => {
    const localData = getLocalStorage("tasks");
    if (localData) {
      setTaskLists(localData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    taskList: filteredList,
    selectedTaskFilter,
    createTask,
    updateTask,
    deleteTask,
    changeFilter,
    changeTaskStatus,
  };
}

export default useTaskManager;
