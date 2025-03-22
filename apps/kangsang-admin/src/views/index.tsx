"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import AppThemeProvider from "@/providers/ThemeProvider";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function WithProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <NextAuthProvider>
      <ReactQueryProvider>
        <ReduxProvider>
          <AppRouterCacheProvider>
            <AppThemeProvider>{children}</AppThemeProvider>
          </AppRouterCacheProvider>
        </ReduxProvider>
      </ReactQueryProvider>
    </NextAuthProvider>
  );
}

export default WithProviders;
