import { Theme } from "@mui/material";
import Button from "./Button";

function OverridesComponents(theme: Theme) {
  return Object.assign(Button(theme));
}

export default OverridesComponents;
