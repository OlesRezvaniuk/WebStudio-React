import { NavLink, Outlet } from 'react-router-dom';

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

export const Layout = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
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
                <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
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
                    <NavLink to="/contacts">Contacts</NavLink>
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
    </>
  );
};
