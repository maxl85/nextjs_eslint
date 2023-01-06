// import { TopLevelCategory } from './page.interface';

export interface PageItem {
  _id: string;
  alias: string;
  category: string;
  title: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  // isOpened?: boolean;
  pages: PageItem[];
}

// export interface FirstLevelMenuItem {
//   route: string;
//   name: string;
//   icon: JSX.Element;
//   id: TopLevelCategory;
// }