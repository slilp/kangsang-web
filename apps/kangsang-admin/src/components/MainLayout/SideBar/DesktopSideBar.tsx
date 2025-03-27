import { Drawer, Typography, Box, IconButton } from "kangsang-mui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import Menus from "./Menus";
import MiniMenus from "./MiniMenues";

interface DesktopSidebarProps {
  expandMenu: boolean;
  setExpandMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function DesktopSidebar({ expandMenu, setExpandMenu }: DesktopSidebarProps) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: expandMenu ? 240 : 100,
          transition: "width 0.25s",
          backgroundColor: "background.default",
        },
      }}
      slotProps={{
        paper: {
          sx: {
            borderLeft: "0",
            borderTop: "0",
            borderBottom: "0",
            borderStyle: "dashed",
          },
        },
      }}
      open={true}
    >
      <Box
        mt={2}
        px={2}
        display="flex"
        flexDirection={expandMenu ? "row" : "column"}
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Typography variant="h5" fontWeight="bold">
          Logo
        </Typography>
        <IconButton
          sx={{
            alignItems: "center",
            justifyContent: "center",
            width: 30,
            height: 30,
            border: "1px solid",
            borderColor: "text.disabled",
          }}
          onClick={() => setExpandMenu(!expandMenu)}
          size="small"
        >
          <FontAwesomeIcon icon={expandMenu ? faChevronLeft : faChevronRight} />
        </IconButton>
      </Box>
      {expandMenu ? <Menus role="admin" /> : <MiniMenus role="admin" />}
    </Drawer>
  );
}

export default DesktopSidebar;
