import aboutData from '../../data/about.json';
import { ReactComponent as AntenaIcon } from '../../img/antenna 1.svg';
import { AboutItem } from './About.styled';

export const About = () => {
  console.log(aboutData);
  console.log(AntenaIcon);

  return (
    <>
      <ul>
        {aboutData.map(item => {
          return (
            <AboutItem key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </AboutItem>
          );
        })}
      </ul>
      <AntenaIcon />
    </>
  );
};
