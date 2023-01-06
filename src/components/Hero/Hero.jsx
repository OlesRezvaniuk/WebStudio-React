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

  useEffect(() => {
    window.addEventListener('keydown', handleKeyModalClose);
    return () => {
      window.removeEventListener('keydown', handleKeyModalClose);
    };
  }, []);

  const handleKeyModalClose = e => {
    if (e.code === 'Escape') {
      setIsModalOpen(false);
    }
  };

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      console.log('hi');
      setIsModalOpen(false);
    }
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
        <div>
          <ModalBox onClick={handleBackdropClose}>
            Modal <CLoseIcon onClick={handleModalOpen}></CLoseIcon>
          </ModalBox>
        </div>
      )}
    </HeroSection>
  );
};
