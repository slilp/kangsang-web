import { InputTypeEnum } from "@/types/form";
import { Autocomplete, TextField } from "kangsang-mui";
import UploadInput from "./UploadInput";

interface InputProps {
  id: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  type: InputTypeEnum;
  value?: string;
  options?: string[];
  errorMsg?: string;
}

function Input({
  id,
  onChange,
  type = InputTypeEnum.TEXT,
  placeholder = "",
  value = "",
  options,
  errorMsg,
}: InputProps) {
  switch (type) {
    case InputTypeEnum.SELECTION:
      return (
        <Autocomplete
          value={value}
          defaultValue={value}
          options={options || []}
          onChange={(_, newValue) => {
            onChange(newValue || "");
          }}
          disableClearable
          getOptionLabel={(option) => option || ""}
          renderInput={(params) => (
            <TextField
              data-testid={`${id}-selection-input`}
              placeholder={placeholder}
              helperText={errorMsg}
              error={!!errorMsg}
              {...params}
            />
          )}
        />
      );
    case InputTypeEnum.IMAGE:
      return (
        <UploadInput
          id={id}
          type="image/*"
          value={value}
          errorMsg={errorMsg}
          onChange={onChange}
        />
      );
    default:
      return (
        <TextField
          data-testid={`${id}-text-input`}
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

export default Input;
