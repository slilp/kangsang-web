"use client";

import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { CssBaseline, dynamicTheme, ThemeProvider } from "kangsang-mui";
import { useAppSelector } from "../redux/hook";

interface ThemeProviderProps {
  children: ReactNode;
}

const interFont = Inter({ subsets: ["latin"] });

const AppThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeSelectorState = useAppSelector((state) => state.themeMode.theme);

  return (
    <ThemeProvider
      theme={dynamicTheme(themeSelectorState, {
        fontFamily: interFont.style.fontFamily,
      })}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
