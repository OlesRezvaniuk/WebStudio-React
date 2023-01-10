import { Outlet } from 'react-router-dom';
import { PortfolioBtn } from 'components/PortfolioBtn/PortfolioBtn';
import styled from '@emotion/styled';

const Section = styled.section`
  padding: 0px 15px;
  width: 768px;
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
