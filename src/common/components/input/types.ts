export interface InputFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  wrapperClassName?: string;
  inputClassName?: string;
  label?: string;
  type: string;
}
