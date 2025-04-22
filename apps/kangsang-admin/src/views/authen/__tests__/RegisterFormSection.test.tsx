import React from "react";
import { render, screen, fireEvent, waitFor } from "@/utils/testUtil";
import RegisterFormSection from "../components/RegisterFormSection";
import authApi from "@/services/auth";
import { vi } from "vitest";

vi.mock("@/services/auth", () => ({
  ...vi.importActual("@/services/auth"),
  default: {
    register: vi.fn(),
  },
}));

describe("RegisterFormSection", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the register form", () => {
    render(<RegisterFormSection />);
    expect(screen.getByText("Register")).toBeInTheDocument();
    expect(screen.getByText("Welcome to Admin Dashboard")).toBeInTheDocument();
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(
      screen.getByTestId("password-input").querySelector("input")
    ).toHaveAttribute("type", "password");
    expect(
      screen.getByTestId("confirm-password-input").querySelector("input")
    ).toHaveAttribute("type", "password");
    expect(screen.getByTestId("register-btn")).toBeInTheDocument();
  });

  it("should allow text input for email, password, and confirm password fields", () => {
    render(<RegisterFormSection />);
    // Given
    const emailField = screen
      .getByTestId("email-input")
      .querySelector("input") as HTMLInputElement;
    const passwordField = screen
      .getByTestId("password-input")
      .querySelector("input") as HTMLInputElement;
    const confirmPasswordField = screen
      .getByTestId("confirm-password-input")
      .querySelector("input") as HTMLInputElement;

    // When
    fireEvent.change(emailField, { target: { value: "test@example.com" } });
    fireEvent.change(passwordField, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordField, {
      target: { value: "password123" },
    });

    // Then
    expect(emailField).toHaveValue("test@example.com");
    expect(passwordField).toHaveValue("password123");
    expect(confirmPasswordField).toHaveValue("password123");
  });

  it("should toggle password visibility", () => {
    render(<RegisterFormSection />);
    const togglePasswordButton = screen.getByTestId("open-password-btn");
    const passwordField = screen
      .getByTestId("password-input")
      .querySelector("input") as HTMLInputElement;

    // When
    fireEvent.click(togglePasswordButton);

    // Then
    expect(passwordField).toHaveAttribute("type", "text");
  });

  it("should toggle confirm password visibility", () => {
    render(<RegisterFormSection />);
    const toggleConfirmPasswordButton = screen.getByTestId(
      "open-confirm-password-btn"
    );
    const confirmPasswordField = screen
      .getByTestId("confirm-password-input")
      .querySelector("input") as HTMLInputElement;

    // When
    fireEvent.click(toggleConfirmPasswordButton);

    // Then
    expect(confirmPasswordField).toHaveAttribute("type", "text");
  });

  it("should display validation errors when submitting without required fields", async () => {
    render(<RegisterFormSection />);
    const submitButton = screen.getByTestId("register-btn");

    // When
    fireEvent.click(submitButton);

    // Then
    await waitFor(() =>
      expect(screen.getAllByText("*required field")).toHaveLength(3)
    );
  });

  it("should show success when submit form successfully", async () => {
    render(<RegisterFormSection />);

    // Given
    (authApi.register as ReturnType<typeof vi.fn>).mockResolvedValue({});
    const emailField = screen
      .getByTestId("email-input")
      .querySelector("input") as HTMLInputElement;
    const passwordField = screen
      .getByTestId("password-input")
      .querySelector("input") as HTMLInputElement;
    const confirmPasswordField = screen
      .getByTestId("confirm-password-input")
      .querySelector("input") as HTMLInputElement;
    const submitButton = screen.getByTestId("register-btn");

    // When
    fireEvent.change(emailField, { target: { value: "test@example.com" } });
    fireEvent.change(passwordField, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordField, {
      target: { value: "password123" },
    });
    fireEvent.click(submitButton);

    // Then
    await waitFor(() => {
      expect(authApi.register).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
        displayName: "test",
      });
      expect(
        screen.getByText("You have successfully registered")
      ).toBeInTheDocument();
    });
  });

  it("should show error when submit form error", async () => {
    render(<RegisterFormSection />);

    // Given
    (authApi.register as ReturnType<typeof vi.fn>).mockRejectedValue({});
    const emailField = screen
      .getByTestId("email-input")
      .querySelector("input") as HTMLInputElement;
    const passwordField = screen
      .getByTestId("password-input")
      .querySelector("input") as HTMLInputElement;
    const confirmPasswordField = screen
      .getByTestId("confirm-password-input")
      .querySelector("input") as HTMLInputElement;
    const submitButton = screen.getByTestId("register-btn");

    // When
    fireEvent.change(emailField, { target: { value: "test@example.com" } });
    fireEvent.change(passwordField, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordField, {
      target: { value: "password123" },
    });
    fireEvent.click(submitButton);

    // Then
    await waitFor(() => {
      expect(authApi.register).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
        displayName: "test",
      });
    });
    expect(screen.getByText("Please try again")).toBeInTheDocument();
  });
});
