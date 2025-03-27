"use client";

import React, { useEffect } from "react";
import { Drawer, Typography, Box } from "kangsang-mui";
import Menus from "./Menus";
import { usePathname } from "next/navigation";

interface MobileSideBarProps {
  expandMobileMenu: boolean;
  setExpandMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileSideBar({
  expandMobileMenu,
  setExpandMobileMenu,
}: MobileSideBarProps) {
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

      <Menus role="admin" setExpandMobileMenu={setExpandMobileMenu} />
    </Drawer>
  );
}

export default MobileSideBar;
