import styled from '@emotion/styled';
import mobileBg from '../../img/heroM.jpg';
import tabletBg from '../../img/heroT.jpg';
import desktopBg from '../../img/heroD.jpg';
import { ReactComponent as ModalIconClose } from '../../img/close-black.svg';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 118px 0px;
  position: relative;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url('${mobileBg}');
  background-position: center center;

  background-size: 480px 400px;
  background-repeat: no-repeat;
  @media screen and (max-width: 479px) {
    background-size: cover;
  }
  @media screen and (min-width: 767px) {
    background-image: linear-gradient(
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url('${tabletBg}');
    background-size: 768px 400px;
  }
  @media screen and (min-width: 1280px) {
    padding: 200px 0px;
    background-image: linear-gradient(
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url('${desktopBg}');
    background-size: 1600px 600px;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-weight: 900;
  font-size: 26px;
  line-height: 42px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 30px;
`;

export const ModalBtn = styled.button`
  padding: 10px 32px;
  border: none;
  background: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  color: #ffffff;
`;

export const CLoseIcon = styled(ModalIconClose)`
  * {
    color: black;
    fill: black;
  }
`;

export const ModalBox = styled.div`
  position: fixed;
  background-color: white;
  display: flex;
  width: calc(100% - 30px);
  padding: 0px 15px;
`;
