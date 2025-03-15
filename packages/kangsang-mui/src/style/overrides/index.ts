import { Theme } from "@mui/material";
import Button from "./Button";
import OutlinedInput from "./OutlinedInput";

function OverridesComponents(theme: Theme) {
  return Object.assign(Button(theme), OutlinedInput(theme));
}

export default OverridesComponents;
