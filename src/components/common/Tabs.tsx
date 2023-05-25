import { selectedTabAtom } from '@/store/atoms';
import { MouseEvent, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

interface ITabsProps {
  items: TabItem[];
  onSelect?: (item: TabItem) => void;
}

export type TabItem = {
  id: string;
  title: string;
};

function Tabs(props: ITabsProps) {
  const { items, onSelect } = props;
  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabAtom);

  const handleClick = useCallback(
    (item: TabItem) => (e: MouseEvent<HTMLDivElement>) => {
      if (onSelect) {
        onSelect(item);
        return;
      }
      setSelectedTab(item.id);
    },
    [onSelect, setSelectedTab]
  );

  return (
    <TabsWrapper>
      {items.map(item => {
        return (
          <TabItem key={item.id} isSelcted={selectedTab === item.id} onClick={handleClick(item)}>
            <div>
              <p>{item.title}</p>
            </div>
          </TabItem>
        );
      })}
    </TabsWrapper>
  );
}

const TabsWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
  overflow-x: scroll;
`;

const TabItem = styled.div`
  height: 100%;
  cursor: pointer;
  margin: 0 5px;
  font-weight: ${(props: { isSelcted: boolean }) => (props.isSelcted ? 'bold' : 'normal')};

  div {
    min-width: 30px;
    height: 100%;
    border-bottom: ${(props: { isSelcted: boolean }) => (props.isSelcted ? '2px solid black' : 'none')};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Tabs;
