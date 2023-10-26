import { createRef, useState } from "react";
import { useOutsideClick } from "common";
import { ICheckboxDropdownProps } from "./types";

export const CheckboxDropdown = ({
  options,
  selectedOptions,
  onChange,
}: ICheckboxDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = createRef<HTMLDivElement>();

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option: string) => {
    if (option === "All") {
      onChange(selectedOptions.length === options.length ? [] : options);
    } else {
      const updatedOptions = [...selectedOptions];
      const index = updatedOptions.indexOf(option);
      if (index !== -1) {
        updatedOptions.splice(index, 1);
      } else {
        updatedOptions.push(option);
      }
      onChange(updatedOptions);
    }
  };

  return (
    <div ref={ref} className={`checkbox-dropdown ${isOpen ? "open" : ""}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        Filter
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <label key={"all"}>
            <input
              type="checkbox"
              checked={selectedOptions.length === options.length}
              onChange={() => handleCheckboxChange("All")}
            />
            {"All"}
          </label>
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
