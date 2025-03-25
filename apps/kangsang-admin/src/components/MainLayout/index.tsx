"use client";

import React, { useMemo, useState } from "react";
import { Box, Container, Toolbar } from "kangsang-mui";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
// import SideBar from "./SideBar";

interface MainLayoutProp {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProp) {
  const [expandMenu, setExpandMenu] = useState<boolean>(true);
  const [expandMobileMenu, setExpandMobileMenu] = useState<boolean>(false);
  const drawerWidth = useMemo(() => (expandMenu ? 240 : 100), [expandMenu]);

  return (
    <>
      <NavBar
        drawerWidth={drawerWidth}
        setExpandMobileMenu={setExpandMobileMenu}
      />
      <SideBar
        expandMenu={expandMenu}
        setExpandMenu={setExpandMenu}
        expandMobileMenu={expandMobileMenu}
        setExpandMobileMenu={setExpandMobileMenu}
      />
      <Box
        sx={{
          width: {
            xs: "100%",
            md: `calc(100% - ${drawerWidth}px)`,
          },
          ml: { xs: "0px", md: `${drawerWidth}px` },
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 1 }}>
          <Toolbar />
          {children}
        </Container>
      </Box>
    </>
  );
}

export default MainLayout;
