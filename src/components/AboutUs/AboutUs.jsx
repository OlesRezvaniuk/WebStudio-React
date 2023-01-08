import { Social } from 'components/Social/Social';
import { aboutUsData } from 'data/AboutUsData';
import { styles } from './AboutUs.styled';

export const AboutUs = () => {
  return (
    <styles.AboutUsSection>
      <styles.AboutUsTitle>Our Team</styles.AboutUsTitle>
      <styles.List>
        {aboutUsData.map(data => {
          return (
            <styles.ListItem key={data.id}>
              <styles.ItemImg src={data.img} alt={data.name} loading="lazy" />
              <styles.ItemTitle>{data.name}</styles.ItemTitle>
              <styles.ItemPosition>{data.position}</styles.ItemPosition>
              <Social />
            </styles.ListItem>
          );
        })}
      </styles.List>
    </styles.AboutUsSection>
  );
};
