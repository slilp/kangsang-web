import { Theme } from "@mui/material";

function OutlinedInput(theme: Theme) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
        input: {
          padding: "12px 16px",
        },
      },
    },
  };
}
export default OutlinedInput;
