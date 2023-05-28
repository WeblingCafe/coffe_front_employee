import { MouseEvent, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TabItemBox from '../molecules/TabItem';

interface ITabsProps {
  items: TabItem[];
  onSelect?: (item: TabItem) => void;
  selectedTab: string;
  setSelectedTab: (val: string) => void;
}

export type TabItem = {
  id: string;
  title: string;
};

const Tabs = (props: ITabsProps) => {
  const { items, onSelect, setSelectedTab, selectedTab } = props;
  const tabRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ left: 0, x: 0 });

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

  useEffect(() => {
    if (tabRef.current) tabRef.current.addEventListener('mousedown', mouseDownHandler);
    return () => {
      if (tabRef.current) tabRef.current.removeEventListener('mousedown', mouseDownHandler);
    };
  }, []);

  const mouseDownHandler = (e: any) => {
    if (!tabRef.current) return;
    posRef.current = {
      left: tabRef.current.scrollLeft,
      x: e.clientX,
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = (e: any) => {
    if (!tabRef.current) return;
    const dx = e.clientX - posRef.current.x;
    tabRef.current.scrollLeft = posRef.current.left - dx;
  };

  const mouseUpHandler = () => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  return (
    <TabsWrapper ref={tabRef}>
      {items.map(item => {
        return (
          <TabItemBox
            key={item.id}
            isSelcted={selectedTab === item.id}
            onClick={handleClick(item)}
            title={item.title}
          />
        );
      })}
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid lightgray;
  overflow: hidden;
  user-select: none;
`;

export default Tabs;
