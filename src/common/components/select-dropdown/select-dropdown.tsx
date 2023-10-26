import { ChangeEvent } from "react";
import { StatusDropdownProps } from "./types";

export const SelectDropdown = ({
  options,
  value,
  onChange,
  className = "",
}: StatusDropdownProps) => {
  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      value={value}
      onChange={handleStatusChange}
      className={`select-dropdown ${className}`}
    >
      {options.map((option: string, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
