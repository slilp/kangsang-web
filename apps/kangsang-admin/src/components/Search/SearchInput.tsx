import { InputTypeEnum } from "@/types/form";
import { TextField } from "kangsang-mui";

interface SearchInputProps {
  id: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  type: InputTypeEnum;
  value?: string;
  options?: string[];
  errorMsg?: string;
}

function SearchInput({
  id,
  onChange,
  type = InputTypeEnum.TEXT,
  placeholder = "",
  value = "",
  options,
  errorMsg,
}: SearchInputProps) {
  switch (type) {
    default:
      return (
        <TextField
          data-testid={`${id}-text-search-input`}
          placeholder={placeholder}
          value={value}
          helperText={errorMsg}
          error={!!errorMsg}
          onChange={(e) => onChange(e.target.value.toLowerCase())}
        />
      );
  }
  return <></>;
}

export default SearchInput;
