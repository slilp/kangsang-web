import { Box, BoxProps } from "@mui/material";
import React from "react";

interface ContentBoxProps extends BoxProps {
  children: React.ReactNode;
}

function ContentBox({ children, ...props }: ContentBoxProps) {
  return (
    <Box boxShadow={1} borderRadius={2} bgcolor="background.paper" {...props}>
      {children}
    </Box>
  );
}

export default ContentBox;
