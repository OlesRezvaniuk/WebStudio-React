import { Hero } from 'components/Hero/Hero';
import { About } from 'components/About/About';
import { Works } from 'components/Works/Works';
import { AboutUs } from 'components/AboutUs/AboutUs';
import { Clients } from 'components/Clients/Clients';

export const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Works />
        <AboutUs />
        <Clients />
      </main>
    </>
  );
};
