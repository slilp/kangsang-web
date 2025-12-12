import { Box, BoxProps } from "@mui/material";
import React from "react";

interface FullPageProps extends BoxProps {
  children: React.ReactNode;
}

function FullPage({ children, ...props }: FullPageProps) {
  return (
    <Box width="100%" height="100vh" {...props}>
      {children}
    </Box>
  );
}

export default FullPage;
