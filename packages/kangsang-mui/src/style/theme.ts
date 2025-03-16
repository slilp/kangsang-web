import { createTheme, Theme } from "@mui/material/styles";
import OverridesComponents from "./overrides";
import { DARK_PALETTE, LIGHT_PALETTE } from "./palette";

interface IThemeOptions {
  fontFamily: string;
}

export const dynamicTheme = (
  mode: "dark" | "light",
  options: IThemeOptions
) => {
  const selectedPalette = mode === "dark" ? DARK_PALETTE : LIGHT_PALETTE;

  const theme: Theme = createTheme({
    palette: {
      mode,
      ...selectedPalette,
    },
    typography: {
      fontFamily: options?.fontFamily,
    },
  });

  theme.components = OverridesComponents(theme);

  return theme;
};
