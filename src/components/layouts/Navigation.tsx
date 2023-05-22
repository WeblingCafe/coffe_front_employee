import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { NavigationItemList } from '@/utils/constants';

interface INavigationProps {
  isHidden: boolean;
}

export default function Navigation(props: INavigationProps) {
  return (
    <NavigationContainer isHidden={props.isHidden}>
      {NavigationItemList.map(item => {
        return (
          <Link key={item.id} className="link-item" href={`${item.path}`}>
            <p>{item.name}</p>
          </Link>
        );
      })}
    </NavigationContainer>
  );
}

const NavigationContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  border-top: 1px solid lightgray;
  visibility: ${(props: INavigationProps) => (props.isHidden ? 'hidden' : 'visible')};

  .link-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
  }
`;
