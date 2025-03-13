import { createTheme, Theme } from "@mui/material/styles";
import OverridesComponents from "./overrides";
import { DARK_PALETTE, LIGHT_PALETTE } from "./palette";

export const dynamicTheme = (mode: "dark" | "light") => {
  const selectedPalette = mode === "dark" ? DARK_PALETTE : LIGHT_PALETTE;

  const theme: Theme = createTheme({
    palette: {
      mode,
      ...selectedPalette,
    },
    typography: {
      fontFamily: "'Inter Variable', sans-serif",
    },
  });

  theme.components = OverridesComponents(theme);

  return theme;
};
