"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Typography,
  Stack,
  Icon,
  List,
  Divider,
  ListItemText,
  ListItemIcon,
  Box,
  Button,
  Popover,
  ListItemButton,
  ListItem,
} from "kangsang-mui";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IMainNavMenu, navMenus } from "./navMenus";

interface MiniMenusProps {
  role: string;
}

function MiniMenus({ role }: MiniMenusProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectMenu, setSelectMenu] = useState<IMainNavMenu[]>([]);

  const router = useRouter();

  const onOpenPopover = (
    event: React.MouseEvent<HTMLButtonElement>,
    menus: IMainNavMenu[]
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectMenu(menus);
  };
  return (
    <Stack px={1} mt={1}>
      {navMenus.map((navMenu, index) =>
        navMenu.roles.length === 0 || navMenu.roles.includes(role) ? (
          <List key={`navMenu-${navMenu.id}`} sx={{ p: 0 }}>
            {navMenu.mainMenus.map((menu: IMainNavMenu) => {
              return (
                <Button
                  key={`mainmenu-${menu.id}`}
                  fullWidth
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "text.secondary",
                    position: "relative",
                    gap: 0.5,
                  }}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    menu?.subMenus
                      ? onOpenPopover(e, menu.subMenus as IMainNavMenu[])
                      : router.push(menu.path)
                  }
                >
                  <FontAwesomeIcon icon={menu.icon} />
                  <Typography variant="body2">{menu.title}</Typography>
                  {menu.subMenus && (
                    <Box position="absolute" right="2px">
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </Box>
                  )}
                </Button>
              );
            })}
            {!(index + 1 === navMenus.length) && <Divider sx={{ my: 0.5 }} />}
          </List>
        ) : null
      )}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <List sx={{ p: 0.5 }}>
          {selectMenu?.map((subMenu, index) =>
            subMenu.roles.length === 0 || subMenu.roles.includes(role) ? (
              <ListItem key={`submenu-${subMenu.id}`} disablePadding>
                <Button
                  fullWidth
                  onClick={() => {
                    router.push(subMenu.path);
                    setAnchorEl(null);
                  }}
                  sx={{ color: "text.secondary" }}
                >
                  <Typography variant="body2">{subMenu.title}</Typography>
                </Button>
              </ListItem>
            ) : null
          )}
        </List>
      </Popover>
    </Stack>
  );
}

export default MiniMenus;
