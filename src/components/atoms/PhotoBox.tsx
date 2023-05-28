import styled from 'styled-components';

interface IPhotoBoxProps {
  imgeUrl?: string;
}

const PhotoBox = (props: IPhotoBoxProps) => {
  const { imgeUrl } = props;

  return (
    <PhotoBoxWrapper>
      <img src={imgeUrl} alt="menuPhoto"></img>
    </PhotoBoxWrapper>
  );
};

const PhotoBoxWrapper = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid lightgray;

  > img {
    width: 88px;
    height: 88px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default PhotoBox;
