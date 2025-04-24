import { Box, Typography } from "kangsang-mui";
import { Controller } from "react-hook-form";

import Input from "./Input";
import { InputTypeEnum } from "@/types/form";

interface InputFormProps {
  id: string;
  control: any;
  title?: string;
  description?: string;
  placeholder?: string;
  options?: string[];
  type: InputTypeEnum;
  value?: string;
}

function InputForm({
  id,
  control,
  title,
  description,
  placeholder = "",
  options = [],
  type = InputTypeEnum.TEXT,
  value = "",
}: InputFormProps) {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      {title && (
        <Typography variant="body2">
          {title}{" "}
          {description && (
            <Typography
              component="span"
              variant="caption"
              color="text.secondary"
              sx={{ ml: 1 }}
            >
              ({description} )
            </Typography>
          )}
        </Typography>
      )}

      <Controller
        name={id}
        control={control}
        defaultValue={value}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            options={options}
            errorMsg={error?.message}
            onChange={(newValue: string) => onChange(newValue)}
          />
        )}
      />
    </Box>
  );
}

export default InputForm;
