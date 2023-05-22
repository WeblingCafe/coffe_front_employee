import { axiosClient, CafeResponse } from '@/apis';
import { Menu } from '@/types';
import { useQuery } from '@tanstack/react-query';

interface IMenuQueryProps {
  menuId?: number;
  categoryId?: number;
}

const useMenuQuery = (props: IMenuQueryProps) => {
  const getMenus = async (props: IMenuQueryProps) => {
    const { menuId, categoryId } = props;
    let reqUrl = '/v1/menus';
    if (menuId) {
      reqUrl += `/${menuId}`;
    } else if (categoryId) {
      reqUrl += `/category/${categoryId}`;
    }
    let response = await axiosClient.get<CafeResponse<Menu[]>>(reqUrl);
    return response.data.responseObject;
  };

  const { data, ...rest } = useQuery({
    queryKey: ['menuSearch'],
    queryFn: () => getMenus(props),
    retry: false,
  });

  const ret = data instanceof Array ? data : [data];

  return { menu: ret, rest };
};

export default useMenuQuery;
