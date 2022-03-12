import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const LoadingContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #000000aa;
  z-index: 2000;
  justify-content: center;
  align-items: center;
`;

export const LoadingCenter = styled.View`
  width: 60%;
  height: 30%;
  background-color: ${GlobalStyles.colors.white};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  margin: 5px 0px;
  font-size: 18px;
`;
