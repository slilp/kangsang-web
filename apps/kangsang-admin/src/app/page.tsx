"use client";

import { Button, Box } from "kangsang-mui";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <Box>
      <Button
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </Button>
    </Box>
  );
}
