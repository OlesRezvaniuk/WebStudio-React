import styled from '@emotion/styled';
import antena from '../../img/antenna 1.svg';
import clock from '../../img/clock 1.svg';
import diagram from '../../img/diagram 1.svg';
import astronaut from '../../img/astronaut 1.svg';

export const AboutItem = styled.li`
  position: relative;
  &:nth-of-type(1) {
    background-image: url('${antena}');
    background-position: center;
    background-repeat: no-repeat;
    background-color: red;
  }
  &:nth-of-type(2) {
    background-image: url('${clock}');
    background-position: center;
    background-repeat: no-repeat;
    background-color: blue;
  }
  &:nth-of-type(3) {
    background-image: url('${diagram}');
    background-position: center;
    background-repeat: no-repeat;
    background-color: yellow;
  }
  &:nth-of-type(4) {
    background-image: url('${astronaut}');
    background-position: center;
    background-repeat: no-repeat;
    background-color: green;
  }
`;
