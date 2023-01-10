import { Outlet } from 'react-router-dom';
import { PortfolioBtn } from 'components/PortfolioBtn/PortfolioBtn';
import styled from '@emotion/styled';

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  padding: 60px 15px;
  @media screen and (min-width: 1200px) {
    padding: 94px 15px;
  }
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Portfolio = () => {
  return (
    <main>
      <Section>
        <PortfolioBtn />

        <Outlet />
      </Section>
    </main>
  );
};
