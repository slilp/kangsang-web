import { Theme } from "@mui/material";

function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "0.75rem 1rem",
          boxShadow: "none",
          textTransform: "none",
          variants: [
            //   {
            //     props: { variant: "contained", color: "primary" },
            //     style: {
            //       "--_shadow": "#000",
            //       border: `1px solid ${theme.palette.primary.main}`,
            //       boxShadow: `inset -0.75px -0.75px 0.75px var(--_shadow), inset 0.75px 0.75px 0.75px rgba(255, 255, 255, 0.4)`,
            //       backgroundImage: `linear-gradient(to bottom, ${
            //         theme.palette.primary.light
            //       }, ${theme.palette.primary.main})`,
            //       backgroundColor: theme.palette.primary.light,
            //       "&:hover": {
            //         boxShadow: `inset -0.75px -1px 0.75px var(--_shadow), inset 0.75px 0 0.75px rgba(255, 255, 255, 0.4)`,
            //         backgroundImage: "none",
            //       },
            //       "&:active": {
            //         boxShadow: "none",
            //       },
            //       ...theme.applyStyles("dark", {
            //         "--_shadow": "#1876c2",
            //         borderColor: "#467297",
            //         backgroundColor: theme.palette.primary.dark,
            //         backgroundImage: `linear-gradient(to bottom, ${
            //           theme.palette.primary.main
            //         }, ${theme.palette.primary.dark})`,
            //       }),
            //     },
            //   },
            //   {
            //     props: { variant: "outlined", color: "primary" },
            //     style: {
            //       borderColor: theme.palette.grey[300],
            //       "&:hover": {
            //         borderColor: theme.palette.grey[400],
            //       },
            //       ...theme.applyStyles("dark", {
            //         borderColor: theme.palette.grey[700],
            //         "&:hover": {
            //           borderColor: theme.palette.grey[600],
            //         },
            //       }),
            //     },
            //   },
          ],
        },
      },
    },
  };
}
export default Button;
