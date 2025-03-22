import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

async function setupConfig() {
  const { default: tsconfigPaths } = await import("vite-tsconfig-paths");

  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/utils/setupTest.tsx",
    },
  });
}

export default setupConfig();
