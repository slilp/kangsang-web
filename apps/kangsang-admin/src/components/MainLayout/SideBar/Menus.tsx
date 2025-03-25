import { Typography, Stack, List } from "kangsang-mui";

import { IMainNavMenu, navMenus } from "./navMenus";
import SubMenus from "./SubMenus";

interface MenusProp {
  role: string;
}

function Menus({ role }: MenusProp) {
  return (
    <Stack sx={{ color: "text.secondary", mt: 2 }}>
      {navMenus.map((navMenu, index) =>
        navMenu.roles.length === 0 || navMenu.roles.includes(role) ? (
          <List key={`navMenu-${index}`} sx={{ p: 0, my: 1, px: 1 }}>
            {navMenu.titleSection && (
              <Typography variant="subtitle2" sx={{ px: 2 }}>
                {navMenu.titleSection}
              </Typography>
            )}
            {navMenu.mainMenus.map((menu: IMainNavMenu, index: number) => (
              <SubMenus
                key={`submenu-section-${index}`}
                menu={menu}
                role={role}
              />
            ))}
          </List>
        ) : null
      )}
    </Stack>
  );
}

export default Menus;
