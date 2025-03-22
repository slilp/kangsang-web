import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  __esModule: true,
  Roboto: vi.fn().mockReturnValue({
    className: "roboto-mock",
    style: { fontFamily: "Roboto" },
  }),
  Inter: vi.fn().mockReturnValue({
    className: "inter-mock",
    style: { fontFamily: "Inter" },
  }),
  // Add mocks for other fonts you use
}));
