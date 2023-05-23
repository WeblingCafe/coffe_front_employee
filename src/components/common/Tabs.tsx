import { MouseEvent } from 'react';
import styled from 'styled-components';

interface ITabsProps {
  items: TabItem[];
  onChange?: (item: TabItem) => void;
}

export type TabItem = {
  id: string;
  title: string;
};

function Tabs(props: ITabsProps) {
  const { items, onChange } = props;

  const handleClick = (item: TabItem) => (e: MouseEvent<HTMLDivElement>) => {
    console.log('handleClick tab', item);
    if (onChange) {
      onChange(item);
    }
  };

  return (
    <TabsWrapper>
      {items.map(item => {
        return (
          <TabItem key={item.id} onClick={handleClick(item)}>
            <p>{item.title}</p>
          </TabItem>
        );
      })}
    </TabsWrapper>
  );
}

const TabsWrapper = styled.div`
  height: 40px;
  background-color: yellow;
`;

const TabItem = styled.div`
  width: fit-content;
  height: 100%;
`;

export default Tabs;
