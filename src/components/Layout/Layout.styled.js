import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIconOpen } from '../../img/menu_40px.svg';
import { ReactComponent as MenuIconClose } from '../../img/close_40px.svg';

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin: auto;
  padding: 0px 15px;
  max-width: 1200px;
  height: 60px;
  @media screen and (min-width: 768px) {
    height: 80px;
  }
`;

export const NavList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  list-style: none;
  padding: 0;
  margin-right: auto;
  margin: 0;
  margin-left: 93px;
  gap: 50px;
`;

export const NavListMenu = styled.ul`
  @media screen and (max-width: 767px) {
    display: block;
    list-style: none;
    padding: 0;
    margin-right: auto;
    margin: 0;
    margin-left: 93px;
    gap: 50px;
  }
  display: none;
`;

export const AddressList = styled.ul`
  margin-left: auto;
  list-style: none;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const AddressListMenu = styled.ul`
  display: none;
  @media screen and (max-width: 768px) {
    margin-left: auto;
    list-style: none;
    display: block;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: 0.03em;
  color: #2196f3;
`;

export const LogoLinkBlack = styled.span`
  color: black;
`;

export const MenuBtn = styled.button`
  margin-left: auto;
  z-index: 10;
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuBox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  width: 100%;
  height: 100%;
  position: fixed;
`;

export const MenuIconOpenStyled = styled(MenuIconOpen)`
  cursor: pointer;
  color: black;
  transition: 250ms;
  &:hover {
    transition: 250ms;

    * {
      color: #2196f3;
      fill: #2196f3;
    }
  }
`;
export const MenuIconCloseStyled = styled(MenuIconClose)`
  cursor: pointer;
  color: black;
  transition: 250ms;
  &:hover {
    transition: 250ms;

    * {
      color: #2196f3;
      fill: #2196f3;
    }
  }
`;
