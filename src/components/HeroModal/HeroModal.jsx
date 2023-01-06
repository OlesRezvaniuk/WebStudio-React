import { Backdrop, ModalBox, CloseIcon } from './HeroModal.styled';
import { useEffect } from 'react';

export const HeroModal = ({ setIsModalOpen, handleModalOpen }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyModalClose);
    return () => {
      window.removeEventListener('keydown', handleKeyModalClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <Backdrop onClick={handleBackdropClose}>
      <ModalBox>
        Modal <CloseIcon onClick={handleModalOpen}></CloseIcon>
      </ModalBox>
    </Backdrop>
  );
};
