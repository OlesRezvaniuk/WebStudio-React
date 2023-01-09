import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

const Map = styled(Iframe)`
  width: 75%;
  @media screen and (max-width: 480px) {
    width: calc(100% - 30px);
  }
  height: 50%;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border: none;
  box-shadow: 0px 0px 8px #666565;
`;

const FooterSection = styled.section`
  padding: 60px 15px;
  background-color: #2f303a;
`;

const AddressBox = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const LogoLink = styled(Link)`
  font-family: 'Raleway';
  font-style: normal;
  text-decoration: none;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: 0.03em;
  color: #2196f3;
`;

const LogoLinkBlack = styled.span`
  color: black;
`;

const AddressList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const AddressItem = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.6);
  &:nth-of-type(1) {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.03em;
    color: #ffffff;
  }
  &:nth-of-type(2) {
    pointer-events: none;
`;

const MapBackdrop = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  background-color: #00000063;
  width: 100%;
  height: 100%;
`;

const SocialTitle = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const styles = {
  FooterSection,
  FooterContainer,
  AddressBox,
  LogoLink,
  LogoLinkBlack,
  AddressList,
  AddressItem,
  MapBackdrop,
  SocialTitle,
  Map,
};
