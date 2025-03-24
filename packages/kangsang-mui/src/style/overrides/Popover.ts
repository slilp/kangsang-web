import { Theme } from "@mui/material";

function Popover(theme: Theme) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: "8px",
          boxShadow: theme.shadows[1],
          padding: "2px",
          backgroundImage: "none",
          backdropFilter: "blur(6px)",
          backgroundColor: theme.palette.background.paper,
          opacity: 0.8,
          transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        root: {
          // Root-level styles for the Popover
        },
      },
    },
  };
}

export default Popover;
