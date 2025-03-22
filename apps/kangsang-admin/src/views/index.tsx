"use client";

import NextAuthProvider from "@/providers/NextAuthProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import AppThemeProvider from "@/providers/ThemeProvider";

function WithProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <NextAuthProvider>
      <ReactQueryProvider>
        <ReduxProvider>
          <AppThemeProvider>{children}</AppThemeProvider>{" "}
        </ReduxProvider>
      </ReactQueryProvider>
    </NextAuthProvider>
  );
}

export default WithProviders;
