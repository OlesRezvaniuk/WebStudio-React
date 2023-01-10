import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const GaleryLinksList = styled.ul`
  @media screen and (min-width: 370px) {
    width: 339px;
  }
  @media screen and (min-width: 600px) {
    justify-content: center;
    width: 100%;
    padding: 0px 0px 30px 0px;
  }
  display: flex;
  flex-wrap: wrap;

  gap: 8px;
  padding: 0px 0px 40px 0px;
`;

const GaleryNavLink = styled(NavLink)`
  width: max-content;
  text-decoration: none;
  @media screen and (max-width: 370px) {
    padding: 6px 10px;
  }
  padding: 6px 22px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #212121;

  &.active {
    background-color: #2196f3;
    color: white;
  }
`;

export const styles = { GaleryLinksList, GaleryNavLink };
