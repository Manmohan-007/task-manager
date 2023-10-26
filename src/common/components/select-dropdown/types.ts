export interface StatusDropdownProps {
  options: string[];
  value: string;
  onChange: (newValue: string) => void;
  className?: string;
}
