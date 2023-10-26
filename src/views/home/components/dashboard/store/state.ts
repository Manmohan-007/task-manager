import { atom } from "recoil";
import { IFilters, ITaskLists } from "./types";

export const selectedTaskFilterState = atom<IFilters[]>({
  key: "selected-task-filter-key",
  default: ["To Do", "In Progress", "Done"],
});

export const taskListState = atom<ITaskLists>({
  key: "task-list-state-key",
  default: {
    allTasksList: [],
    filteredTasksList: [],
  },
});
