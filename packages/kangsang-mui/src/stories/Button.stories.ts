import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // Add argTypes to support all MuiButtonProps
    color: {
      control: "select",
      options: [
        "inherit",
        "primary",
        "secondary",
        "success",
        "error",
        "info",
        "warning",
      ],
    },
    variant: { control: "select", options: ["text", "outlined", "contained"] },
    size: { control: "select", options: ["small", "medium", "large"] },
    disabled: { control: "boolean" },
    // ...other MuiButtonProps if needed
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "contained",
    label: "Button",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "outlined",
    label: "Button",
    color: "secondary",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
