import { styles } from './About.styled';
import { aboutData } from '../../data/AboutData';

export const About = () => {
  return (
    <styles.AboutSection>
      <styles.AboutList>
        {aboutData.map(item => {
          return (
            <styles.AboutItem key={item.id}>
              <styles.AboutText>{item.text}</styles.AboutText>
              <styles.AboutTitle>{item.title}</styles.AboutTitle>
              <styles.ImgBox>
                <styles.AboutImg loading="lazy" src={item.img} alt="aboutImg" />
              </styles.ImgBox>
            </styles.AboutItem>
          );
        })}
      </styles.AboutList>
    </styles.AboutSection>
  );
};
