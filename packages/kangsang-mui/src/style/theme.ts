import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import React, { useMemo } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#d21919",
    },
    secondary: {
      main: "#d21919",
    },
    background: {
      default: "##d21919",
      paper: "#d21919",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      default: "#000000",
      paper: "#000000",
    },
  },
});

export { darkTheme, lightTheme };
