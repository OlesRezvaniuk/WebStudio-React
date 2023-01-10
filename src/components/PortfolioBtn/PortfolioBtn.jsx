import { PortfolioLinksData } from 'data/PortfolioLinksData';
import { styles } from './PortfolioBtn.styled';

export const PortfolioBtn = () => {
  return (
    <styles.GaleryLinksList>
      {PortfolioLinksData.map(item => {
        return (
          <styles.GaleryNavLink end key={item.id} to={item.to}>
            {item.name}
          </styles.GaleryNavLink>
        );
      })}
    </styles.GaleryLinksList>
  );
};
