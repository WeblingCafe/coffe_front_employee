export type Menu = {
  menuId: number;
  menuName: string;
  menuCategoryName: string;
  price: number;
  menuPhotoUrl: string;
  hotAvailable: boolean;
  coldAvailable: boolean;
};

export type NavagationItem = {
  id: number;
  path: string;
  name: string;
};

export type Category = {
  categoryId: number;
  categoryName: string;
};
