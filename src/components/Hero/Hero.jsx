import {
  HeroTitle,
  ModalBtn,
  HeroSection,
  HeroContainer,
  CLoseIcon,
  ModalBox,
} from './Hero.styled';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  console.log(isModalOpen);

  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>
          Эффективные решения <br /> для вашего бизнеса
        </HeroTitle>
        <ModalBtn onClick={handleModalOpen}>Заказать услугу</ModalBtn>
      </HeroContainer>
      {isModalOpen && (
        <ModalBox>
          Modal <CLoseIcon onClick={handleModalOpen}></CLoseIcon>
        </ModalBox>
      )}
    </HeroSection>
  );
};
