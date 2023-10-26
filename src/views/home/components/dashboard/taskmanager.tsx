import { TaskList, TaskForm, TaskFilter, Header } from "views";

export const TaskManager = () => {
  return (
    <div>
      <Header />
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  );
};
