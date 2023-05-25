import { axiosClient, CafeResponse } from '@/apis';
import Tabs, { type TabItem } from '@/components/organisms/Tabs';
import { Category, Menu } from '@/types';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useMemo, useState } from 'react';

export const getServerSideProps: GetServerSideProps<{
  categoryList: Category[];
  menuList: Menu[];
}> = async () => {
  const categoryList = await axios.get<CafeResponse<Category[]>>('https://coffee-api.snaps.com/v1/categories');
  const menuList = await axios.get<CafeResponse<Menu[]>>('https://coffee-api.snaps.com/v1/menus');

  categoryList.data.responseObject.unshift({
    categoryId: -1,
    categoryName: 'ALL',
  });

  return {
    props: {
      categoryList: categoryList.data.responseObject,
      menuList: menuList.data.responseObject,
    },
  };
};

export default function Menu({ categoryList, menuList }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const categoryTabList = useMemo(() => {
    return categoryList.map(el => {
      return {
        id: `${el.categoryId}`,
        title: el.categoryName,
      };
    });
  }, [categoryList]);

  return (
    <>
      <Tabs items={categoryTabList} />
    </>
  );
}
