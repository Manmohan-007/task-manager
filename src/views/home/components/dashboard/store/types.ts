export type IStatus = "To Do" | "In Progress" | "Done";

export type IFilters = "All" | "To Do" | "In Progress" | "Done";

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: string;
}

export type ITaskLists = {
  filteredTasksList: ITask[];
  allTasksList: ITask[];
};

export interface IFormState {
  title: string;
  description: string;
  status: string;
}

export interface IInputFieldConfig {
  name: keyof IFormState;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}
