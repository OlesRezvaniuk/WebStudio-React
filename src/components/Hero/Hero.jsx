import { HeroTitle, ModalBtn, HeroSection, HeroContainer } from './Hero.styled';
import { useState } from 'react';
import { HeroModal } from 'components/HeroModal/HeroModal';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>
          Эффективные решения <br /> для вашего бизнеса
        </HeroTitle>
        <ModalBtn onClick={handleModalOpen}>Заказать услугу</ModalBtn>
      </HeroContainer>

      {isModalOpen && (
        <HeroModal
          setIsModalOpen={setIsModalOpen}
          handleModalOpen={handleModalOpen}
        />
      )}
    </HeroSection>
  );
};
