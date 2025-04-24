import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  __esModule: true,
  Rubik: vi.fn().mockReturnValue({
    className: "rubil-mock",
    style: { fontFamily: "Prompt" },
  }),
}));

vi.mock("next/navigation", () => ({
  __esModule: true,
  useRouter: vi.fn().mockReturnValue({
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn(),
    reload: vi.fn(),
    beforePopState: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
    },
  }),
  useSearchParams: vi.fn().mockReturnValue({
    get: vi.fn(),
    getAll: vi.fn(),
    has: vi.fn(),
    keys: vi.fn(),
    entries: vi.fn(),
    toString: vi.fn(),
  }),
}));
