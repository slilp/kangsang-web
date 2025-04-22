import React from "react";
import { render, screen, fireEvent, waitFor } from "@/utils/testUtil";
import LoginFormSection from "../components/LoginFormSection";
import { signIn } from "next-auth/react";

vi.mock("next-auth/react", () => ({
  signIn: vi.fn(),
}));

describe("LoginFormSection", () => {
  it("should renders the login", () => {
    render(<LoginFormSection />);
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Welcome to Admin Dashboard")).toBeInTheDocument();
    expect(
      screen.getByTestId("email-input").querySelector("input")
    ).toHaveAttribute("type", "text");
    expect(
      screen.getByTestId("password-input").querySelector("input")
    ).toHaveAttribute("type", "password");
    expect(screen.getByTestId("signin-btn")).toBeInTheDocument();
  });

  it("should allow text input for email and password fields", () => {
    render(<LoginFormSection />);
    // Given
    const emailField = screen
      .getByTestId("email-input")
      .querySelector("input") as HTMLInputElement;
    const passwordField = screen
      .getByTestId("password-input")
      .querySelector("input") as HTMLInputElement;

    // When
    fireEvent.change(emailField, { target: { value: "test@example.com" } });
    fireEvent.change(passwordField, { target: { value: "password123" } });

    // Then
    expect(passwordField).toHaveValue("password123");
    expect(emailField).toHaveValue("test@example.com");
  });

  it("should show password when toggles password visibility", () => {
    render(<LoginFormSection />);
    const toggleButton = screen.getByTestId("open-password-btn");

    // When
    fireEvent.click(toggleButton);

    // Then
    const passwordField = screen
      .getByTestId("password-input")
      .querySelector("input") as HTMLInputElement;
    expect(passwordField).toHaveAttribute("type", "text");
  });

  it("should display `*required field` when submit without required field", async () => {
    render(<LoginFormSection />);
    // Given
    const signInButton = screen.getByTestId("signin-btn");

    // When
    fireEvent.click(signInButton);

    // Then
    await waitFor(() =>
      expect(screen.getAllByText("*required field")).toHaveLength(2)
    );
  });

  it("should signin success", async () => {
    render(<LoginFormSection />);
    // Given
    (signIn as ReturnType<typeof vi.fn>).mockResolvedValue({ ok: true });

    const emailField = screen
      .getByTestId("email-input")
      .querySelector("input") as HTMLInputElement;
    const passwordField = screen
      .getByTestId("password-input")
      .querySelector("input") as HTMLInputElement;
    const signInButton = screen.getByTestId("signin-btn");

    // When
    fireEvent.change(emailField, { target: { value: "test@example.com" } });
    fireEvent.change(passwordField, { target: { value: "password123" } });
    fireEvent.click(signInButton);

    // Then
    await waitFor(() =>
      expect(signIn).toHaveBeenCalledWith("credentials", {
        email: "test@example.com",
        password: "password123",
        redirect: false,
      })
    );
  });
});
