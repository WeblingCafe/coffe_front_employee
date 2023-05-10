import styled from 'styled-components';

interface ILayoutProps {
  children: JSX.Element;
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eff0f0;

  .content-layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 440px;
    height: 100vh;
    background-color: white;
    box-shadow: 0px 0px 2px 2px lightgray;
  }
`;

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutWrapper>
        <main className="content-layout">{props.children}</main>
      </LayoutWrapper>
    </>
  );
}
