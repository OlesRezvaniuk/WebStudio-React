import styled from '@emotion/styled';

const AboutUsSection = styled.section`
  background-color: #f5f4fa;
  text-align: center;
  padding: 60px 15px;
  margin: auto;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 94px 15px;
  }
`;

const AboutUsTitle = styled.h2`
  margin-bottom: 30px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 50px;
  }
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.03em;

  color: #212121;
`;

const List = styled.ul`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(1, 4fr);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 4fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 4fr);
  }
`;

const ListItem = styled.li`
  display: flex;
  @media screen and (max-width: 479px) {
    width: calc(100% - 30px);
  }
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  background: #ffffff;
  /* material shadow v1 */

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;

  padding-bottom: 24px;
`;

const ItemImg = styled.img`
  @media screen and (max-width: 479px) {
    width: calc(100%);
  }
  @media screen and (min-width: 480px) {
    width: 450px;
  }
  @media screen and (min-width: 768px) {
    width: 354px;
  }
  @media screen and (min-width: 1200px) {
    width: 270px;
  }
  margin-bottom: 30px;
`;

const ItemTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.03em;

  color: #212121;
`;

const ItemPosition = styled.p`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.03em;

  color: #757575;
`;

export const styles = {
  AboutUsSection,
  AboutUsTitle,
  List,
  ListItem,
  ItemImg,
  ItemTitle,
  ItemPosition,
};
