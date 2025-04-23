import { Box, TextField, Typography } from "kangsang-mui";
import React from "react";
import { Controller } from "react-hook-form";

interface InputFormProps {
  id: string;
  control: any;
  title?: string;
  description?: string;
  placeholder?: string;
  type?: string;
  value?: string;
}

function InputForm({
  id,
  control,
  title,
  description,
  placeholder = "",
  type = "text",
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
          <TextField
            data-testid={`${id}-text-input`}
            placeholder={placeholder}
            value={value}
            helperText={error?.message}
            error={!!error?.message}
            onChange={(e) => onChange(e.target.value.toLowerCase())}
          />
        )}
      />
    </Box>
  );
}

export default InputForm;
