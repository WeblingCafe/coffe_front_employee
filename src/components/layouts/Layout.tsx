import { useAuth } from '@/hooks/useAuth';
import styled from 'styled-components';
import Header from './Header';
import Navigation from './Navigation';

interface ILayoutProps {
  children: JSX.Element;
}

interface IContentSectoinProps {
  showNavigation: boolean;
}

export default function Layout(props: ILayoutProps) {
  const { isLogin } = useAuth();

  return (
    <>
      <LayoutWrapper showNavigation={isLogin}>
        <div className="content-layout">
          <Header isHidden={!isLogin}></Header>
          <section className="content-section">{props.children}</section>
          <Navigation isHidden={!isLogin} />
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
    ${(props: IContentSectoinProps) => (props.showNavigation ? 'height : calc(100% - 160px)' : 'height : 100%')};
  }
`;
