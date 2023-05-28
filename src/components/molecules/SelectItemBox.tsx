import styled from 'styled-components';
import PhotoBox from '../atoms/PhotoBox';

export type SelectItem = {
  id: string;
  imageUrl?: string;
  title: string;
  category: string;
};

interface ISelectItemBoxProps {
  item: SelectItem;
  onClick: (menuId: string) => () => void;
}

const SelectItemBox = (props: ISelectItemBoxProps) => {
  const { item, onClick } = props;
  return (
    <SelectItemBoxWrapepr onClick={onClick(item.id)}>
      <PhotoBox imgeUrl={item.imageUrl} />
      <h2>{item.title}</h2>
    </SelectItemBoxWrapepr>
  );
};

const SelectItemBoxWrapepr = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;

  > h2 {
    margin-left: 20px;
  }
`;
export default SelectItemBox;
