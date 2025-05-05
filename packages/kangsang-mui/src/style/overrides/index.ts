import { Theme } from "@mui/material";
import Button from "./Button";
import OutlinedInput from "./OutlinedInput";
import Popover from "./Popover";
import Alert from "./Alert";
import Paper from "./Paper";

function OverridesComponents(theme: Theme) {
  return Object.assign(
    Button(theme),
    OutlinedInput(theme),
    Popover(theme),
    Alert(theme),
    Paper(theme)
  );
}

export default OverridesComponents;
