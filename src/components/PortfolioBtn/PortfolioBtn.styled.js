import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const GaleryNavLink = styled(NavLink)`
  &.active {
    background-color: tomato;
  }
`;

export const styles = { GaleryNavLink };
