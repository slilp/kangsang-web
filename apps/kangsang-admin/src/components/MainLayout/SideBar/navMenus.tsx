import {
  faHouse,
  faBoxOpen,
  IconDefinition,
  faComment,
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

const categorySection: INavMenu = {
  id: "category",
  titleSection: "Categories",
  roles: [],
  mainMenus: [
    {
      id: "category-menu-1",
      title: "Category",
      path: "/category",
      icon: faBoxOpen,
      roles: [],
      subMenus: [
        {
          id: "category-submenu-1",
          title: "View Categories",
          path: "/category/view",
          roles: [],
        },
        {
          id: "product-submenu-2",
          title: "Create Category",
          path: "/category/create",
          roles: [],
        },
      ],
    },
  ],
};

const chatSection: INavMenu = {
  id: "chat",
  titleSection: "Chat",
  roles: [],
  mainMenus: [
    {
      id: "chat-menu-1",
      title: "Chat",
      path: "/chat",
      icon: faComment,
      roles: [],
    },
  ],
};

export const navMenus: INavMenu[] = [
  dashboardSection,
  categorySection,
  chatSection,
];
