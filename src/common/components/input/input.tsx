import { ChangeEvent } from "react";
import { InputFieldProps } from "./types";

export const InputField = ({
  placeholder,
  value,
  onChange,
  required = false,
  wrapperClassName = "",
  inputClassName = "",
  label = "",
  type = "text",
}: InputFieldProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <div className={wrapperClassName}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input-field ${inputClassName}`}
        value={value}
        onChange={handleInputChange}
        required={required}
      />
    </div>
  );
};
