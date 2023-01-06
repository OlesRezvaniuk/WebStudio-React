import {
  HeroTitle,
  ModalBtn,
  HeroSection,
  HeroContainer,
  CLoseIcon,
} from './Hero.styled';
import { useState } from 'react';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  console.log(isModalOpen);

  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>
          Эффективные решения <br /> для вашего бизнеса
        </HeroTitle>
        <ModalBtn onClick={handleModalOpen}>Заказать услугу</ModalBtn>
        {isModalOpen && (
          <div>
            <CLoseIcon></CLoseIcon>
          </div>
        )}
      </HeroContainer>
    </HeroSection>
  );
};
