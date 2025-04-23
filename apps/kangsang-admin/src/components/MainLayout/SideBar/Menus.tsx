import { Typography, Stack, List, Box } from "kangsang-mui";

import { IMainNavMenu, navMenus } from "./navMenus";
import SubMenus from "./SubMenus";

interface MenusProp {
  role: string;
  setExpandMobileMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menus({ role, setExpandMobileMenu }: MenusProp) {
  return (
    <Stack sx={{ color: "text.secondary", mt: 2 }}>
      {navMenus.map((navMenu, index) =>
        navMenu.roles.length === 0 || navMenu.roles.includes(role) ? (
          <List key={`navMenu-${index}`} sx={{ p: 0, mb: 1, px: 1 }}>
            {navMenu.titleSection && (
              <Typography variant="body2" fontWeight="medium" sx={{ px: 2 }}>
                {navMenu.titleSection}
              </Typography>
            )}
            <Box my={0.5} />
            {navMenu.mainMenus.map((menu: IMainNavMenu, index: number) => (
              <SubMenus
                key={`submenu-section-${index}`}
                menu={menu}
                role={role}
                setExpandMobileMenu={setExpandMobileMenu}
              />
            ))}
          </List>
        ) : null
      )}
    </Stack>
  );
}

export default Menus;
