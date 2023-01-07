import styled from '@emotion/styled';

export const AboutSection = styled.section`
  padding: 60px 15px;
  max-width: 480px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  margin: auto;
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 94px 15px;
  }
`;

export const AboutList = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(1, 4fr);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 4fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 4fr);
  }
`;

export const AboutItem = styled.li`
  display: flex;
  flex-direction: column-reverse;
  &:nth-of-type(3) {
    @media screen and (min-width: 1200px) {
      width: 270px;
      position: relative;
      top: -24px;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 270px;
  }
`;

export const AboutTitle = styled.h3`
  margin-bottom: 10px;

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #212121;
`;

export const AboutText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #757575;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  background: #f5f4fa;
  border-radius: 4px;
  width: 100%;
  height: 120px;
  align-items: center;
  margin-bottom: 30px;
`;

export const AboutImg = styled.img`
  height: 70px;
  width: 70px;
`;

export const styles = {
  AboutItem,
  AboutImg,
  AboutList,
  AboutSection,
  ImgBox,
  AboutTitle,
  AboutText,
};
