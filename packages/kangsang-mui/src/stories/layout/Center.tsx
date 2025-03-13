import { Box, BoxProps } from "@mui/material";
import React from "react";

interface CenterProps extends BoxProps {
  children: React.ReactNode;
}

function Center({ children, ...props }: CenterProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      {...props}
    >
      {children}
    </Box>
  );
}

export default Center;
