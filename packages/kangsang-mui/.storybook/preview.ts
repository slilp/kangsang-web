import type { Preview } from "@storybook/react";
import "@fontsource/prompt/100.css";
import "@fontsource/prompt/200.css";
import "@fontsource/prompt/300.css";
import "@fontsource/prompt/400.css";
import "@fontsource/prompt/500.css";
import "@fontsource/prompt/600.css";
import "@fontsource/prompt/700.css";
import "@fontsource/prompt/800.css";
import "@fontsource/prompt/900.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { dynamicTheme } from "../src/style/theme";

const preview: Preview = {
  parameters: {},
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: dynamicTheme("light", {
          fontFamily: "'Prompt', sans-serif",
        }),
        dark: dynamicTheme("dark", {
          fontFamily: "'Prompt', sans-serif",
        }),
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
