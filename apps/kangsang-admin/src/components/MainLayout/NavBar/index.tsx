import React, { useState } from "react";
import { AppBar, Box, IconButton, Toolbar } from "kangsang-mui";
import ThemeControl from "./ThemeControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import UserControl from "./UserControl";

interface NavBarProps {
  drawerWidth: number;
  setExpandMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavBar({ drawerWidth, setExpandMobileMenu }: NavBarProps) {
  return (
    <AppBar
      sx={{
        boxShadow: "none",
        backgroundImage: "none",
        position: "fixed",
        top: "0",
        left: "auto",
        right: "0",
        zIndex: "99",
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(0, 0, 0, 0)",
        transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      }}
    >
      <Toolbar
        sx={{
          width: {
            xs: "100%",
            md: `calc(100% - ${drawerWidth}px)`,
          },
          ml: { xs: "0px", md: `${drawerWidth}px` },
        }}
      >
        <IconButton
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
          }}
          onClick={() => setExpandMobileMenu(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </IconButton>

        <Box
          display="flex"
          justifyContent="flex-end"
          width="100%"
          sx={{ gap: 0.75 }}
        >
          <ThemeControl />
          <UserControl />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
