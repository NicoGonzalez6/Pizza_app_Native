import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const Text = styled.Text`
  color: ${GlobalStyles.colors.softGrey};
  font-family: ${GlobalStyles.fonts.mainFont};
  font-size: 12px;
`;

export const TextInput = styled.TextInput`
  padding: 0;
  color: ${GlobalStyles.colors.black};
  font-family: ${GlobalStyles.fonts.mainFont};
`;
