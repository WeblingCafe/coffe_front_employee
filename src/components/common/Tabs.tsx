import { selectedTabAtom } from '@/store/atoms';
import { MouseEvent, useCallback, useEffect, useRef } from 'react';
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
  overflow: hidden;
  user-select: none;
`;

const TabItem = styled.div`
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

export default Tabs;
