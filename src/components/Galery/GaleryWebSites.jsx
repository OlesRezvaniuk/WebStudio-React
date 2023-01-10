import { GaleryData } from 'data/GaleryData';
import { styles } from './Galery.styled';

export const GaleryWebSites = () => {
  const WebSiteProjects = GaleryData.filter(item => item.ganre === 'Web-site');
  return (
    <styles.GaleryList>
      {WebSiteProjects.map(item => {
        return (
          <li key={item.id}>
            <styles.GaleryImg src={item.src} alt={item.title} loading="lazy" />
            <h3>{item.title}</h3>
            <p>{item.ganre}</p>
          </li>
        );
      })}
    </styles.GaleryList>
  );
};
