import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const TabContainer = styled.TouchableOpacity`
  height: 35px;
  margin: 8px 0;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Text = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  margin-top: 4px;
  font-size: 15px;
`;
