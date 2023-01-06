import aboutData from '../../data/about.json';
import { ReactComponent as AntenaIcon } from '../../img/antenna 1.svg';

const img = [
  { id: 1, item: AntenaIcon },
  {
    id: 2,
    item: AntenaIcon,
  },
  {
    id: 3,
    item: AntenaIcon,
  },
  {
    id: 4,
    item: AntenaIcon,
  },
];

export const About = () => {
  console.log(aboutData);
  console.log(AntenaIcon);

  return (
    <ul>
      {aboutData.map(item => {
        return (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <img src={item.img} alt={item.title} />
          </li>
        );
      })}
      {img.map(item => {
        return <img key={item.id} src={item.item} alt="name" />;
      })}
    </ul>
  );
};
