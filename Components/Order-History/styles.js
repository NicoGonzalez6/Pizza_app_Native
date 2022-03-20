import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const OrderHistoryContainer = styled.View`
  height: 60px;
  background-color: ${GlobalStyles.colors.white};
  margin: 10px 0;
  elevation: 5;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
`;
