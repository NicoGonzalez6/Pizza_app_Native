import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const Pressable = styled.TouchableOpacity`
  background-color: ${GlobalStyles.colors.mainColor};
  width: 80%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 40px;
  elevation: 3;
`;

export const Text = styled.Text`
  color: ${GlobalStyles.colors.white};
  font-family: ${GlobalStyles.fonts.mainFont};
  letter-spacing: 1px;
  margin-top: 4px;
`;
