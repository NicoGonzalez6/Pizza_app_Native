import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const CartMainContainer = styled.View`
  width: 90%;
  margin: 0 auto;
`;

export const TitleContainer = styled.View`
  height: 15%;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Title = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.black};
  font-size: 30px;
  font-weight: 900;
`;

export const FoodItemsContainer = styled.ScrollView`
  height: 80%;
  padding: 10px 0;
`;
