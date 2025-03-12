"use client";

//main
import { ReactNode } from "react";
import { CssBaseline, lightTheme, ThemeProvider } from "kangsang-mui";

interface ThemeProviderProps {
  children: ReactNode;
}

const AppThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {/* <MuiGlobalStyles /> */}
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
