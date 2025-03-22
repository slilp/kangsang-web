import React from "react";
import { render, screen } from "@/utils/testUtil";
import LoginFormSection from "../components/LoginFormSection";

describe("LoginFormSection", () => {
  it("renders the login form", () => {
    render(<LoginFormSection />);

    expect(screen.getByText("ditto")).toBeInTheDocument();
  });
});
