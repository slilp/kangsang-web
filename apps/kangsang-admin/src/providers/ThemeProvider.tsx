"use client";

import { ReactNode } from "react";
import { CssBaseline, dynamicTheme, ThemeProvider } from "kangsang-mui";
import { useAppSelector } from "../redux/hook";

interface ThemeProviderProps {
  children: ReactNode;
}

const AppThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeSelectorState = useAppSelector((state) => state.themeMode.theme);

  return (
    <ThemeProvider theme={dynamicTheme(themeSelectorState)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
