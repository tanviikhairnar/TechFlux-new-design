import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

type FormSelectProps = {
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  triggerClassName?: string;
  contentClassName?: string;
};

export function FormSelect({
  value,
  onValueChange,
  options,
  placeholder,
  triggerClassName,
  contentClassName,
}: FormSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={triggerClassName}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={contentClassName}>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
