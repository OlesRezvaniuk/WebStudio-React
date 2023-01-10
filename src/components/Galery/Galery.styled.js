import styled from '@emotion/styled';

const GaleryList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(1, 4fr);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 4fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 4fr);
  }
  gap: 30px;
`;

const GaleryItem = styled.li`
  text-align: center;
`;

const GaleryImg = styled.img`
  width: calc(100% - 30px);
  @media screen and (min-width: 480px) {
    width: calc(100% - 30px);
  }
  @media screen and (min-width: 768px) {
    width: 354px;
  }
`;

export const styles = { GaleryList, GaleryItem, GaleryImg };
