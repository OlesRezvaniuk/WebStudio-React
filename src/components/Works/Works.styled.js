import styled from '@emotion/styled';

const WorksSection = styled.section`
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
    padding-bottom: 94px;
  }
`;

const WorksSectionTitle = styled.h2`
  display: none;
`;

const WorksList = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  list-style: none;
`;

const WorksItem = styled.li`
  position: relative;
`;

const WorksTitle = styled.p`
  text-align: center;
  padding: 27px 0px;
  background-color: rgba(47, 48, 58, 0.8);
  position: absolute;
  bottom: 0px;
  width: 100%;

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ffffff;
`;

export const styles = {
  WorksSection,
  WorksSectionTitle,
  WorksList,
  WorksTitle,
  WorksItem,
};
