"use client";

import { ReactNode, useEffect } from "react";
import { Prompt } from "next/font/google";
import {
  Alert,
  CssBaseline,
  dynamicTheme,
  Snackbar,
  ThemeProvider,
} from "kangsang-mui";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { getThemeStorage } from "@/utils/storage";
import { changeTheme } from "@/redux/theme";
import { closeSnackbar } from "@/redux/snackbar";

interface ThemeProviderProps {
  children: ReactNode;
}

const promptFont = Prompt({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const AppThemeProvider = ({ children }: ThemeProviderProps) => {
  const dispatch = useAppDispatch();
  const themeSelectorState = useAppSelector((state) => state.themeMode.theme);
  const snackbarSelectorState = useAppSelector((state) => state.snackbar);

  useEffect(() => {
    const themeLocalStorage = getThemeStorage();
    if (themeLocalStorage === "dark") {
      dispatch(changeTheme(true));
    }
  }, []);

  return (
    <ThemeProvider
      theme={dynamicTheme(themeSelectorState, {
        fontFamily: promptFont.style.fontFamily,
      })}
    >
      <CssBaseline />
      <Snackbar
        data-testid="main-alert-snackbar"
        open={snackbarSelectorState.open}
        onClose={(event, reason) => {
          dispatch(closeSnackbar());
        }}
        autoHideDuration={1500}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          severity={snackbarSelectorState.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarSelectorState.message}
        </Alert>
      </Snackbar>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
