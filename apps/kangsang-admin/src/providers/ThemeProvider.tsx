"use client";

import { ReactNode, useEffect } from "react";
import { Rubik } from "next/font/google";
import { usePathname } from "next/navigation";
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

const rubiktFont = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const AppThemeProvider = ({ children }: ThemeProviderProps) => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const themeSelectorState = useAppSelector((state) => state.themeMode.theme);
  const snackbarSelectorState = useAppSelector((state) => state.snackbar);

  const isLoginPage = pathname === "/login";

  useEffect(() => {
    const themeLocalStorage = getThemeStorage();
    if (themeLocalStorage === "dark" && !isLoginPage) {
      dispatch(changeTheme(true));
    } else if (isLoginPage) {
      dispatch(changeTheme(false));
    }
  }, [isLoginPage]);

  return (
    <ThemeProvider
      theme={dynamicTheme(isLoginPage ? "light" : themeSelectorState, {
        fontFamily: rubiktFont.style.fontFamily,
      })}
    >
      <CssBaseline />
      <Snackbar
        data-testid="main-alert-snackbar"
        open={snackbarSelectorState.open}
        onClose={() => {
          dispatch(closeSnackbar());
        }}
        autoHideDuration={3000}
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
