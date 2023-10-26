import { useState, FormEvent, useMemo, useCallback } from "react";
import {
  useTaskManager,
  statusList,
  inputFieldsConfig,
  IFormState,
} from "views";

import { SelectDropdown, InputField } from "common";

export const TaskForm = () => {
  const { createTask } = useTaskManager();

  const [formState, setFormState] = useState<IFormState>({
    title: "",
    description: "",
    status: "To Do",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (formState.title.trim() === "") {
      return;
    }
    createTask(formState);
    setFormState({ title: "", description: "", status: "To Do" });
  };

  const handleInputChange = useCallback(
    (field: string) =>
      (value: string): void => {
        setFormState((prevFormState) => ({
          ...prevFormState,
          [field]: value,
        }));
      },
    []
  );

  const renderFields = useMemo(() => {
    return inputFieldsConfig.map(({ name, placeholder, required, type }) => {
      if (type !== "select") {
        return (
          <InputField
            type={type as string}
            key={name}
            placeholder={placeholder}
            value={formState[name]}
            onChange={handleInputChange(name as string)}
            required={required || false}
          />
        );
      }

      return (
        <SelectDropdown
          key={name}
          value={formState[name]}
          onChange={handleInputChange(name)}
          options={statusList}
        />
      );
    });
  }, [formState, handleInputChange]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="task-form">
        <div>
          <h3>Create task</h3>
        </div>
        <div className="form-container">
          {renderFields}
          <button type="submit" className="submit-button">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};
