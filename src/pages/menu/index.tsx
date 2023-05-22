import { CafeResponse } from '@/apis';
import { Category, Menu } from '@/types';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps<{
  categoryList: Category[];
  menuList: Menu[];
}> = async () => {
  const categoryList = await axios.get<CafeResponse<Category[]>>('https://coffee-api.snaps.com/v1/categories');
  const menuList = await axios.get<CafeResponse<Menu[]>>('https://coffee-api.snaps.com/v1/menus');

  return {
    props: {
      categoryList: categoryList.data.responseObject,
      menuList: menuList.data.responseObject,
    },
  };
};

export default function Menu({ categoryList, menuList }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log('menuList 2', menuList);
  console.log('categoryList 2', categoryList);

  return <p>hello Menu </p>;
}
