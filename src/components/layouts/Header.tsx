import { NavigationItemList } from '@/utils/constants';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface IHeaderProps {
  isHidden: boolean;
}

export default function Header(props: IHeaderProps) {
  const router = useRouter();
  const naviagtionItem = NavigationItemList.filter(item => {
    return router.asPath.startsWith(item.path);
  });
  return (
    <>
      <HeaderWrapper isHidden={props.isHidden}>
        <h2>{naviagtionItem.length === 1 ? naviagtionItem[0].name : ''}</h2>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  display: ${(props: IHeaderProps) => (props.isHidden ? 'none' : 'block')};

  h2 {
    margin: 0;
    position: absolute;
    bottom: 0;
    left: 10px;
  }
`;
