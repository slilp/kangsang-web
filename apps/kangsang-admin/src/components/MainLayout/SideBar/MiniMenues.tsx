"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Typography,
  Stack,
  List,
  Divider,
  ListItemText,
  ListItemIcon,
  Popover,
  ListItemButton,
  Box,
} from "kangsang-mui";

import { IMainNavMenu, navMenus } from "./navMenus";
import MiniMenuButton from "./MiniMenuButton";
import { validateMainMenuPath, validateSubMenuPath } from "@/utils/path";
import SubMenuButton from "./SubMenuButton";

interface MiniMenusProps {
  role: string;
}

function MiniMenus({ role }: MiniMenusProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectMenu, setSelectMenu] = useState<any[]>([]);
  const pathname = usePathname();
  const router = useRouter();

  const onOpenPopover = (event: any, menus: any[]) => {
    setAnchorEl(event.currentTarget);
    setSelectMenu(menus);
  };
  return (
    <Stack px={1} mt={2}>
      {navMenus.map((navMenu, index) =>
        navMenu.roles.length === 0 || navMenu.roles.includes(role) ? (
          <List key={`navMenu-${navMenu.id}`} sx={{ p: 0 }}>
            {navMenu.mainMenus.map((menu: IMainNavMenu) => {
              return (
                <MiniMenuButton
                  key={`mainmenu-${menu.id}`}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    menu?.subMenus
                      ? onOpenPopover(e, menu.subMenus as any[])
                      : router.push(menu.path)
                  }
                  icon={menu.icon}
                  label={menu.title}
                  isSelected={validateMainMenuPath(pathname, menu.path)}
                  isShowSubMenu={!!menu.subMenus}
                />
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
        <Box p={0.5} display="flex" flexDirection="column" gap={0.5}>
          {selectMenu?.map((subMenu, index) =>
            subMenu.roles.length === 0 || subMenu.roles.includes(role) ? (
              <SubMenuButton
                key={`submenu-${subMenu.id}`}
                label={subMenu.title}
                onClick={() => {
                  router.push(subMenu.path);
                  setAnchorEl(null);
                }}
                isSelected={validateSubMenuPath(pathname, subMenu.path)}
              />
            ) : null
          )}
        </Box>
      </Popover>
    </Stack>
  );
}

export default MiniMenus;
