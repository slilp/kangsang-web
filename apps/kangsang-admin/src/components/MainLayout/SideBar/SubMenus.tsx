"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Collapse, Button } from "kangsang-mui";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IMainNavMenu, ISubNavMenu } from "./navMenus";

interface SubMenusProps {
  role: string;
  menu: IMainNavMenu;
}

function SubMenus({ role, menu }: SubMenusProps) {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <Button
        key={`mainmenu-${menu.id}`}
        fullWidth
        sx={{ color: "text.secondary" }}
        onClick={() =>
          menu?.subMenus ? setOpen(!open) : router.push(menu.path)
        }
        startIcon={<FontAwesomeIcon icon={menu.icon} size="xs" />}
      >
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2">{menu.title}</Typography>
          {menu?.subMenus &&
            (open ? (
              <FontAwesomeIcon icon={faChevronUp} size="xs" />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            ))}
        </Box>
      </Button>
      {menu?.subMenus && (
        <Collapse in={open} unmountOnExit timeout={200}>
          <Box display="flex">
            <Box width="1px" bgcolor="text.disabled" ml={2} />
            <Box width="100%">
              {menu?.subMenus.map((subMenu: ISubNavMenu, index: number) =>
                subMenu.roles.length === 0 || subMenu.roles.includes(role) ? (
                  <Box
                    key={`submenu-${subMenu.id}`}
                    display="flex"
                    alignItems="center"
                  >
                    <Box width="16px" height="1px" bgcolor="text.disabled" />
                    <Button
                      fullWidth
                      sx={{
                        color: "text.secondary",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      onClick={() => router.push(subMenu.path)}
                    >
                      <Typography variant="body2">{subMenu.title}</Typography>
                    </Button>
                  </Box>
                ) : null
              )}
            </Box>
          </Box>
        </Collapse>
      )}
    </>
  );
}

export default SubMenus;
