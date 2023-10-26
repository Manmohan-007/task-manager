import { filterListConstant, useTaskManager } from "views";
import { CheckboxDropdown } from "common";

export const TaskFilter = () => {
  const { selectedTaskFilter, changeFilter } = useTaskManager();

  const handleCheckboxChange = (selectedOptions: string[]) => {
    if (selectedOptions.includes("All")) {
      changeFilter(filterListConstant.filter((option) => option !== "All"));
    } else {
      if (selectedTaskFilter.includes("All")) {
        changeFilter(selectedOptions);
      } else {
        const filteredOptions = selectedOptions.filter(
          (option) => option !== "All"
        );
        changeFilter(filteredOptions);
      }
    }
  };

  return (
    <div className="multi-checkbox-filter">
      <h3>Tasks</h3>
      <CheckboxDropdown
        selectedOptions={selectedTaskFilter}
        onChange={handleCheckboxChange}
        options={filterListConstant}
      />
    </div>
  );
};
