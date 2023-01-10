import { GaleryData } from 'data/GaleryData';
import { styles } from './Galery.styled';

export const GaleryMarketing = () => {
  const WebSiteProjects = GaleryData.filter(item => item.ganre === 'Marketing');
  return (
    <styles.GaleryList>
      {WebSiteProjects.map(item => {
        return (
          <styles.GaleryItem key={item.id}>
            <styles.GaleryImg src={item.src} alt={item.title} loading="lazy" />
            <h3>{item.title}</h3>
            <p>{item.ganre}</p>
          </styles.GaleryItem>
        );
      })}
    </styles.GaleryList>
  );
};
