import styled from '@emotion/styled';
import { ReactComponent as ModalIconClose } from '../../img/close-black.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); ;
`;

export const ModalBox = styled.div`
  top: 50%;
  position: relative;
  transform: translateY(-50%);

  background-color: white;
  margin: auto;
  display: flex;
  width: calc(100% - 30px);
  padding: 0px 15px;
`;

export const CloseIcon = styled(ModalIconClose)`
  * {
    color: black;
    fill: black;
  }
`;
