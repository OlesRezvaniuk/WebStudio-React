import { Hero } from 'components/Hero/Hero';
import { About } from 'components/About/About';
import { Works } from 'components/Works/Works';
import { AboutUs } from 'components/AboutUs/AboutUs';

export const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Works />
        <AboutUs />
      </main>
    </>
  );
};
