import styled from '@emotion/styled';

const ClientsSection = styled.section`
  @media screen and (min-width: 480px) {
    width: 480px;
    margin: auto;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
  padding: 60px 15px;
  @media screen and (min-width: 1200px) {
    padding: 94px 15px;
  }
`;

const ClientsTitle = styled.h2`
  margin-bottom: 30px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 50px;
  }
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: 0.03em;

  color: #212121;
`;

const ClientsList = styled.ul`
  display: grid;
  gap: 30px;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 4fr);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const ClientsItem = styled.li`
  display: flex;
  margin: auto;
  @media screen and (max-width: 479px) {
    width: 100%;
  }
  @media screen and (min-width: 480px) {
    width: 210px;
  }
  @media screen and (min-width: 768px) {
    width: 226px;
  }
  @media screen and (min-width: 1200px) {
    width: 170px;
  }
`;

const ClientsLink = styled.a`
  height: 92px;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #afb1b8;
  border-radius: 4px;
  color: #afb1b8;
  fill: #afb1b8;
  transition: 250ms;
  &:hover,
  &:focus {
    color: #2196f3;
    fill: #2196f3;
    border: 1px solid #2196f3;
    box-shadow: 0px 0px 4px #2196f3;
  }
`;

export const styles = {
  ClientsSection,
  ClientsTitle,
  ClientsList,
  ClientsItem,
  ClientsLink,
};
