"use client";

import { ReactNode, useEffect } from "react";
import { Inter } from "next/font/google";
import { CssBaseline, dynamicTheme, ThemeProvider } from "kangsang-mui";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { getThemeStorage } from "@/utils/storage";
import { changeTheme } from "@/redux/theme";

interface ThemeProviderProps {
  children: ReactNode;
}

const interFont = Inter({ subsets: ["latin"] });

const AppThemeProvider = ({ children }: ThemeProviderProps) => {
  const dispatch = useAppDispatch();
  const themeSelectorState = useAppSelector((state) => state.themeMode.theme);

  useEffect(() => {
    const themeLocalStorage = getThemeStorage();
    if (themeLocalStorage === "dark") {
      dispatch(changeTheme(true));
    }
  }, []);

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
