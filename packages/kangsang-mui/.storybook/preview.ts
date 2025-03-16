import type { Preview } from "@storybook/react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { dynamicTheme } from "../src/style/theme";

const preview: Preview = {
  parameters: {},
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: dynamicTheme("light"),
        dark: dynamicTheme("dark"),
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
