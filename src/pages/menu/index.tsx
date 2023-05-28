import { CafeResponse } from '@/apis';
import { SelectItem } from '@/components/molecules/SelectItemBox';
import SelectList from '@/components/organisms/SelectList';
import Tabs, { type TabItem } from '@/components/organisms/Tabs';
import { selectedTabAtom } from '@/store/atoms';
import { Category, Menu } from '@/types';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

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
  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabAtom);

  const categoryTabList = useMemo((): TabItem[] => {
    return categoryList.map(el => {
      return {
        id: `${el.categoryId}`,
        title: el.categoryName,
      };
    });
  }, [categoryList]);

  const selectMenuList = useMemo((): SelectItem[] => {
    const list = menuList.map((el, idx) => {
      return {
        id: `${el.menuId}`,
        imageUrl: el.menuPhotoUrl,
        title: el.menuName,
        category: el.menuCategoryName,
      };
    });
    const tab = categoryTabList.filter(el => el.id === selectedTab)[0];
    const filteredList = list.filter(el => {
      return el.category === tab.title || tab.id === '-1';
    });
    return filteredList;
  }, [menuList, selectedTab]);

  const handleClick = (menuId: string) => () => {
    console.log('handleClick menu', menuId);
  };

  return (
    <MenuLayout>
      <Tabs items={categoryTabList} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <SelectList items={selectMenuList} onClick={handleClick} />
    </MenuLayout>
  );
}

const MenuLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
