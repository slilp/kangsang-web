import { Box } from "kangsang-mui";

import DesktopSidebar from "./DesktopSideBar";
import MobileSideBar from "./MobileSideBar";

interface SideBarProps {
  expandMenu: boolean;
  setExpandMenu: (value: boolean) => void;
  expandMobileMenu: boolean;
  setExpandMobileMenu: (value: boolean) => void;
}

function SideBar({
  expandMenu,
  setExpandMenu,
  expandMobileMenu,
  setExpandMobileMenu,
}: SideBarProps) {
  return (
    <Box component="nav">
      <MobileSideBar
        expandMobileMenu={expandMobileMenu}
        setExpandMobileMenu={setExpandMobileMenu}
      />
      <DesktopSidebar expandMenu={expandMenu} setExpandMenu={setExpandMenu} />
    </Box>
  );
}

export default SideBar;
