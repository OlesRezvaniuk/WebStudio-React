import styled from '@emotion/styled';

const SocialList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const SocialItem = styled.li`
  cursor: pointer;
  display: flex;
  border-radius: 50%;
  background-color: transparent;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  color: #afb1b8;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #2196f3;
    box-shadow: 0px 0px 4px #2196f3;
  }
`;

const Link = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const styles = { SocialList, SocialItem, Link };
