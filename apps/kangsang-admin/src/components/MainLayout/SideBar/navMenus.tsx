import {
  faHouse,
  faBoxOpen,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface INavMenu {
  id: string;
  titleSection: string;
  roles: string[];
  mainMenus: IMainNavMenu[];
}

export interface IMainNavMenu {
  id: string;
  title: string;
  path: string;
  icon: IconDefinition;
  roles: string[];
  subMenus?: ISubNavMenu[];
}

export interface ISubNavMenu {
  id: string;
  title: string;
  path: string;
  roles: string[];
}

const dashboardSection: INavMenu = {
  id: "dashboard",
  titleSection: "Dashboard",
  roles: [],
  mainMenus: [
    {
      id: "dashboard-menu-1",
      title: "Home",
      path: "/",
      icon: faHouse,
      roles: [],
    },
  ],
};

const productSection: INavMenu = {
  id: "product",
  titleSection: "Product",
  roles: [],
  mainMenus: [
    {
      id: "product-menu-1",
      title: "Product",
      path: "/product",
      icon: faBoxOpen,
      roles: [],
      subMenus: [
        {
          id: "product-submenu-1",
          title: "View Products",
          path: "/product/view",
          roles: [],
        },
        {
          id: "product-submenu-2",
          title: "Create Product",
          path: "/product/create",
          roles: [],
        },
      ],
    },
  ],
};

export const navMenus: INavMenu[] = [dashboardSection, productSection];
