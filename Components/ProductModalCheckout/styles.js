import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const MainPriceContainer = styled.View`
  width:90%
  margin:0 auto`;

export const PriceNameContainer = styled.View`
  margin: 8px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: ${GlobalStyles.colors.black};
`;
