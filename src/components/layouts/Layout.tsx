import styled from 'styled-components';

interface ILayoutProps {
  children: JSX.Element;
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutWrapper>{props.children}</LayoutWrapper>
    </>
  );
}
