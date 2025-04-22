import React from "react";
import { render, RenderResult } from "@testing-library/react";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import AppThemeProvider from "@/providers/ThemeProvider";

const customRender = (ui: React.ReactNode): RenderResult => {
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
    // <NextIntlClientProvider>
    <ReactQueryProvider>
      <ReduxProvider>
        <AppThemeProvider>{children}</AppThemeProvider>
      </ReduxProvider>
    </ReactQueryProvider>
    // </NextIntlClientProvider>
  );

  return render(ui, { wrapper: AllTheProviders });
};

export * from "@testing-library/react";
export { customRender as render };
