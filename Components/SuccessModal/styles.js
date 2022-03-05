import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const CenterView = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000000aa;
`;

export const ModalContent = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 50%;
  width: 80%;
  border-radius: 10px;
  padding: 5px 0;
`;

export const ModalHeader = styled.View`
  height: 30%;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ModalImageHeader = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ModalBody = styled.View`
  height: 50%;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ModalTitle = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  font-size: 20px;
`;

export const ModalSubtitle = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  font-size: 14px;
  text-align: center;
  margin: 10px 0;
  color: ${GlobalStyles.colors.softGrey};
`;

export const ModalButtons = styled.View`
  height: 20%;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
