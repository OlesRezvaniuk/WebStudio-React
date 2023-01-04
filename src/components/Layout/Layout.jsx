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
} from './Layout.styled';

export const Layout = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  console.log(menuIsOpen);
  return (
    <>
      <Header>
        <LogoLink to="/">
          Web
          <LogoLinkBlack>Studio</LogoLinkBlack>
        </LogoLink>
        <nav>
          <NavList>
            <li>
              <NavLink to="/">Studio</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </NavList>
        </nav>
        <AddressList>
          <li>
            <a href="mailto:info@devstudio.com">
              {/* <img src="" alt="" /> */}
              info@devstudio.com
            </a>
          </li>
          <li>
            <a href="tel:info@devstudio.com">
              {/* <img src="" alt="" /> */}
              +38 096 111 11 11
            </a>
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
                  {/* <img src="" alt="" /> */}
                  info@devstudio.com
                </a>
              </li>
              <li>
                <a href="tel:info@devstudio.com">
                  {/* <img src="" alt="" /> */}
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
      </Header>
      <Outlet />
    </>
  );
};
