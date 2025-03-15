import { createTheme, Theme } from "@mui/material/styles";
import { Inter } from "@next/font/google";
import OverridesComponents from "./overrides";
import { DARK_PALETTE, LIGHT_PALETTE } from "./palette";

const interFont = Inter({});

export const dynamicTheme = (mode: "dark" | "light") => {
  const selectedPalette = mode === "dark" ? DARK_PALETTE : LIGHT_PALETTE;

  const theme: Theme = createTheme({
    palette: {
      mode,
      ...selectedPalette,
    },
    typography: {
      fontFamily: interFont.style.fontFamily,
    },
  });

  theme.components = OverridesComponents(theme);

  return theme;
};
