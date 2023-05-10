import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NavigationContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  border-top: 1px solid lightgray;

  .link-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
  }
`;

export default function Navigation() {
  return (
    <NavigationContainer>
      <Link className="link-item" href="/home">
        <p>Home</p>
      </Link>
      <Link className="link-item" href="/menu">
        <p>menu</p>
      </Link>
      <Link className="link-item" href="/history">
        <p>history</p>
      </Link>
      <Link className="link-item" href="/cart">
        <p>cart</p>
      </Link>
      <Link className="link-item" href="/mypage">
        <p>MyPage</p>
      </Link>
    </NavigationContainer>
  );
}
