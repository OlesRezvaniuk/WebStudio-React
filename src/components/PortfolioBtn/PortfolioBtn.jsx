import { PortfolioLinksData } from 'data/PortfolioLinksData';
import { styles } from './PortfolioBtn.styled';

export const PortfolioBtn = () => {
  return (
    <ul>
      {PortfolioLinksData.map(item => {
        return (
          <styles.GaleryNavLink key={item.id} to={item.to}>
            {item.name}
          </styles.GaleryNavLink>
        );
      })}
    </ul>
  );
};
