import worksData from 'data/WorksData';
import { styles } from './Works.styled';

export const Works = () => {
  return (
    <styles.WorksSection>
      <styles.WorksSectionTitle>Our Works</styles.WorksSectionTitle>
      <styles.WorksList>
        {worksData.map(item => {
          return (
            <styles.WorksItem key={item.id}>
              <styles.WorksTitle>{item.title}</styles.WorksTitle>
              <img width="370px" src={item.img} alt={item.title} />
            </styles.WorksItem>
          );
        })}
      </styles.WorksList>
    </styles.WorksSection>
  );
};
