import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const FooterSection = styled.section`
  padding: 60px 15px;
  background-color: #2f303a;
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

export const styles = {
  FooterSection,
  LogoLink,
  LogoLinkBlack,
  AddressList,
  AddressItem,
  MapBackdrop,
};
