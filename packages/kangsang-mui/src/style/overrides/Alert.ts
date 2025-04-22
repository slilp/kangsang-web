import { Theme } from "@mui/material";

function Alert(theme: Theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  };
}
export default Alert;
