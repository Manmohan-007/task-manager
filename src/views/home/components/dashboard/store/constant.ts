import { IFilters, IInputFieldConfig, IStatus } from "views";

export const statusList: IStatus[] = ["To Do", "In Progress", "Done"];

export const filterListConstant: IFilters[] = ["To Do", "In Progress", "Done"];

export const inputFieldsConfig: IInputFieldConfig[] = [
  {
    name: "title",
    label: "Title",
    placeholder: "Enter title",
    required: true,
    type: "text",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter description",
    type: "text",
  },
  {
    name: "status",
    label: "Status",
    placeholder: "Select status",
    type: "select",
  },
];
export const tableHeader = [
  {
    name: "title",
    label: "Title",
    width: "20%",
  },
  {
    name: "description",
    label: "Description",
    width: "45%",
  },
  {
    name: "status",
    label: "Status",
    width: "27%",
  },
  {
    name: "action",
    label: "Actions",
    width: "19%",
  },
];
