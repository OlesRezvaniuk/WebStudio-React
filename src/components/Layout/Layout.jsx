/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';

import { useState } from 'react';
import {
  NavList,
  Header,
  AddressList,
  AddressListMenu,
  LogoLink,
  LogoLinkBlack,
  NavListMenu,
  MenuBox,
  MenuBtn,
  MenuIconOpenStyled,
  MenuIconCloseStyled,
  HeaderContainer,
  NavLinkStyled,
  EmailIconStyled,
  EmailAddress,
  PhoneNumber,
  PhoneNumberIconStyled,
} from './Layout.styled';
import { Admin } from 'components/Admin/Admin';

export const Layout = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [blockMapOpen, setBlockMapOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const scroll = e => {
    e.preventDefault();
    setTimeout(() => {
      window.scrollBy({
        top: (0, 6000),
        behavior: 'smooth',
      });
    }, 250);
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoLink to="/">
            Web
            <LogoLinkBlack>Studio</LogoLinkBlack>
          </LogoLink>
          <nav>
            <NavList>
              <li>
                <NavLinkStyled to="/">Studio</NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="/portfolio">Portfolio</NavLinkStyled>
              </li>
              <li>
                <a onClick={scroll} href=" ">
                  Contacts
                </a>
              </li>
            </NavList>
          </nav>
          <AddressList>
            <li>
              <EmailAddress href="mailto:info@devstudio.com">
                <EmailIconStyled />
                info@devstudio.com
              </EmailAddress>
            </li>
            <li>
              <PhoneNumber href="tel:info@devstudio.com">
                <PhoneNumberIconStyled />
                +38 096 111 11 11
              </PhoneNumber>
            </li>
          </AddressList>

          {menuIsOpen && (
            <MenuBox>
              <nav>
                <NavListMenu>
                  <li>
                    <NavLink to="/">Studio</NavLink>
                  </li>
                  <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                  </li>
                  <li>
                    <a onClick={scroll} href=" ">
                      Contacts
                    </a>
                  </li>
                </NavListMenu>
              </nav>
              <AddressListMenu>
                <li>
                  <a href="mailto:info@devstudio.com">
                    <EmailIconStyled />
                    info@devstudio.com
                  </a>
                </li>
                <li>
                  <a href="tel:info@devstudio.com">
                    <PhoneNumberIconStyled />
                    +38 096 111 11 11
                  </a>
                </li>
              </AddressListMenu>
            </MenuBox>
          )}

          <Admin />
          <MenuBtn onClick={handleMenuClick}>
            {!menuIsOpen ? (
              <MenuIconOpenStyled></MenuIconOpenStyled>
            ) : (
              <MenuIconCloseStyled></MenuIconCloseStyled>
            )}
          </MenuBtn>
        </HeaderContainer>
      </Header>
      <Outlet />
      <Footer blockMapOpen={blockMapOpen} setBlockMapOpen={setBlockMapOpen} />
    </>
  );
};
