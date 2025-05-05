import { Theme } from "@mui/material";

function Paper(theme: Theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  };
}

export default Paper;
