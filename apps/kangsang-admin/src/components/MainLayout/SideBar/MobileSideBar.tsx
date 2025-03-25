"use client";

import React from "react";
import { Drawer, Typography, Box } from "kangsang-mui";
import Menus from "./Menus";

function MobileSideBar({ expandMobileMenu, setExpandMobileMenu }: any) {
  const navItems = ["Home", "About", "Contact"];

  return (
    <Drawer
      variant="temporary"
      open={expandMobileMenu}
      onClose={() => setExpandMobileMenu(false)}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
      }}
    >
      <Typography variant="h5" fontWeight="bold" textAlign="center" mt={2}>
        Logo
      </Typography>

      <Menus role="admin" />
    </Drawer>
  );
}

export default MobileSideBar;
