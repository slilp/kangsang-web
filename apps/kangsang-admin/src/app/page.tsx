"use client";

import { Button } from "kangsang-mui";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <Button
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </Button>
    </div>
  );
}
