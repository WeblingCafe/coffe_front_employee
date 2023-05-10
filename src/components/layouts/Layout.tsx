import styled from 'styled-components';
import Navigation from './Navigation';

interface ILayoutProps {
  children: JSX.Element;
}

interface IContentSectoinProps {
  isShowNavigation: boolean;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutWrapper isShowNavigation={true}>
        <div className="content-layout">
          <section className="content-section">{props.children}</section>
          <Navigation />
        </div>
      </LayoutWrapper>
    </>
  );
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eff0f0;

  .content-layout {
    width: 440px;
    height: 100vh;
    background-color: white;
    box-shadow: 0px 0px 2px 2px lightgray;
    position: relative;
  }

  .content-section {
    ${(props: IContentSectoinProps) => (props.isShowNavigation ? 'height : calc(100% - 80px)' : '100%')};
  }
`;
