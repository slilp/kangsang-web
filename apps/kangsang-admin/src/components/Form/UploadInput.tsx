"uce client";

import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Center, colors, IconButton, Typography } from "kangsang-mui";
import {
  faCloudArrowUp,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

interface UploadInputProps {
  id: string;
  onChange: (newValue: string) => void;
  type: string;
  placeholder?: string;
  value?: string;
  errorMsg?: string;
}

function UploadInput({
  id,
  onChange,
  placeholder,
  type,
  value,
  errorMsg,
}: UploadInputProps) {
  const [preview, setPreview] = useState<string | null>(value || null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPreview(result);
        onChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBoxClick = () => {
    inputRef.current?.click();
  };

  const resetUpload = () => {
    setPreview(null);
    onChange("");
  };

  return (
    <Box>
      {preview ? (
        <Box position="relative" width="fit-content" mx="auto">
          <IconButton
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              top: -15,
              right: -10,
            }}
            onClick={resetUpload}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </IconButton>
          <img
            src={preview}
            alt="Preview"
            style={{ height: 200, borderRadius: "8px" }}
          />
        </Box>
      ) : (
        <>
          <Box
            borderRadius={2}
            bgcolor="transparent"
            border={1}
            height={200}
            sx={[
              (theme) => ({
                cursor: "pointer",
                borderColor: !!errorMsg ? colors.red[400] : colors.grey[400],
                "&:hover": {
                  borderColor: !!errorMsg ? colors.red[400] : colors.grey[600],
                },
              }),
              (theme) =>
                theme.applyStyles("dark", {
                  borderColor: !!errorMsg ? colors.red[600] : colors.grey[700],
                  "&:hover": {
                    borderColor: !!errorMsg
                      ? colors.red[600]
                      : colors.grey[400],
                  },
                }),
            ]}
            onClick={handleBoxClick}
          >
            <Center display="flex" flexDirection="column" gap={3}>
              <FontAwesomeIcon
                icon={faCloudArrowUp}
                size="2x"
                style={{
                  color: colors.grey[500],
                }}
              />
              <Typography variant="body1" color="text.secondary">
                {placeholder || "Upload File"}
              </Typography>
            </Center>
          </Box>
          <input
            id={id}
            ref={inputRef}
            data-testid={`${id}-upload-file-input`}
            type="file"
            accept={type}
            hidden
            onChange={handleFileChange}
          />
        </>
      )}

      {errorMsg && (
        <Typography color="error" variant="caption">
          {errorMsg}
        </Typography>
      )}
    </Box>
  );
}

export default UploadInput;
