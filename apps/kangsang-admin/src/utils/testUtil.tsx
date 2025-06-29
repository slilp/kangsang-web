import React from "react";
import { render, RenderResult } from "@testing-library/react";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { Provider as ReduxProvider } from "react-redux";
import AppThemeProvider from "@/providers/ThemeProvider";
import { configureStore } from "@reduxjs/toolkit";
import { reducers, RootState } from "@/redux/store";

function setupStore(preloadedState?: RootState) {
  return configureStore({
    reducer: reducers,
    preloadedState,
  });
}

type CustomRenderOptions = {
  preloadedState?: RootState;
};

const customRender = (
  ui: React.ReactNode,
  options?: CustomRenderOptions
): RenderResult => {
  const preloadedState = options?.preloadedState;
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
    <ReactQueryProvider>
      <ReduxProvider store={setupStore(preloadedState)}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </ReduxProvider>
    </ReactQueryProvider>
  );

  return render(ui, { wrapper: AllTheProviders });
};

export * from "@testing-library/react";
export { customRender as render };
