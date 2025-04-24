"uce client";

import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Center, colors, IconButton, Typography } from "kangsang-mui";
import {
  faCloudArrowUp,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "@/redux/hook";

interface UploadInputProps {
  id: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  type: string;
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
  const themeMode = useAppSelector((state) => state.themeMode);

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
    <Box display="flex" flexDirection="column" gap={2}>
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
            borderColor={colors.grey[themeMode.theme === "dark" ? 700 : 400]}
            height={200}
            sx={{
              cursor: "pointer",
              "&:hover": {
                borderColor:
                  colors.grey[themeMode.theme === "dark" ? 400 : 600],
              },
            }}
            onClick={handleBoxClick}
          >
            <Center display="flex" flexDirection="column" gap={3}>
              <FontAwesomeIcon
                icon={faCloudArrowUp}
                size="2x"
                style={{
                  color: colors.grey[themeMode.theme === "dark" ? 700 : 500],
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

      {errorMsg && <Typography color="error">{errorMsg}</Typography>}
    </Box>
  );
}

export default UploadInput;
