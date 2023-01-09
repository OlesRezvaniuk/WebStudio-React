import { NavLink, Outlet } from 'react-router-dom';
import { PortfolioLinksData } from 'data/PortfolioLinksData';

export const Portfolio = () => {
  return (
    <section>
      <ul>
        {PortfolioLinksData.map(item => {
          return (
            <NavLink key={item.id} to={item.to}>
              {item.name}
            </NavLink>
          );
        })}
      </ul>
      <Outlet />
    </section>
  );
};
