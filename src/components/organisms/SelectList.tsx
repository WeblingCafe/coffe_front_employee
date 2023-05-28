import SelectItemBox, { SelectItem } from '../molecules/SelectItemBox';
import styled from 'styled-components';

interface ISelectListProps {
  items: SelectItem[];
  onClick: (menuId: string) => () => void;
}

const SelectList = (props: ISelectListProps) => {
  const { items, onClick } = props;
  return (
    <SelectListWrapper>
      {items.map(item => {
        return <SelectItemBox key={item.id} item={item} onClick={onClick} />;
      })}
    </SelectListWrapper>
  );
};

const SelectListWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export default SelectList;
