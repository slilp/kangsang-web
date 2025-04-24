"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box, Typography, Collapse, Button, colors } from "kangsang-mui";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IMainNavMenu, ISubNavMenu } from "./navMenus";
import { validateMainMenuPath, validateSubMenuPath } from "@/utils/path";
import SubMenuButton from "./SubMenuButton";

interface SubMenusProps {
  role: string;
  menu: IMainNavMenu;
  setExpandMobileMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

function SubMenus({ role, menu, setExpandMobileMenu }: SubMenusProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();
  const isSelected = validateMainMenuPath(pathname, menu.path);

  useEffect(() => {
    if (isFirstRender) {
      setOpen(isSelected);
      setIsFirstRender(false);
    }
  }, [isSelected]);

  return (
    <>
      <Button
        key={`mainmenu-${menu.id}`}
        fullWidth
        variant={isSelected ? "outlined" : "text"}
        sx={
          isSelected
            ? {
                color: colors.deepOrange[500],
                bgcolor: colors.deepOrange[50],
                borderColor: colors.deepOrange[200],
              }
            : {
                color: "text.secondary",
              }
        }
        onClick={() => {
          if (!!menu?.subMenus) {
            setOpen(!open);
          } else {
            router.push(menu.path);
            setExpandMobileMenu && setExpandMobileMenu(false);
          }
        }}
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
        <Collapse in={open} unmountOnExit timeout={200} sx={{ mt: 0.5 }}>
          <Box display="flex">
            <Box width="1px" bgcolor="text.disabled" ml={2} />
            <Box width="100%">
              {menu?.subMenus.map((subMenu: ISubNavMenu, index: number) =>
                subMenu.roles.length === 0 || subMenu.roles.includes(role) ? (
                  <Box
                    key={`submenu-${subMenu.id}`}
                    display="flex"
                    alignItems="center"
                    mt={0.5}
                  >
                    <Box width="16px" height="1px" bgcolor="text.disabled" />
                    <SubMenuButton
                      isSelected={validateSubMenuPath(pathname, subMenu.path)}
                      label={subMenu.title}
                      onClick={() => {
                        router.push(subMenu.path);
                        setExpandMobileMenu && setExpandMobileMenu(false);
                      }}
                    />
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
