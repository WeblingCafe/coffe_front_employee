import { MouseEvent } from 'react';
import styled from 'styled-components';

interface ITabItemBoxProps {
  isSelcted: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  title: string;
}

const TabItemBox = (props: ITabItemBoxProps) => {
  const { isSelcted, onClick, title } = props;
  return (
    <TabItemBoxWrapper isSelcted={isSelcted} onClick={onClick}>
      <div>
        <p>{title}</p>
      </div>
    </TabItemBoxWrapper>
  );
};

const TabItemBoxWrapper = styled.div`
  height: 100%;
  cursor: pointer;
  margin: 0 5px;
  font-weight: ${(props: { isSelcted: boolean }) => (props.isSelcted ? 'bold' : 'normal')};

  div {
    min-width: 30px;
    height: 100%;
    border-bottom: ${(props: { isSelcted: boolean }) => (props.isSelcted ? '4px solid black' : 'none')};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default TabItemBox;
