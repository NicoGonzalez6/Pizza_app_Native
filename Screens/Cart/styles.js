import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const CartMainContainer = styled.View`
  width: 90%;
  margin: 0 auto;
  margin: 5px auto;
`;

export const TitleContainer = styled.View`
  height: 14%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.black};
  font-size: 30px;
  font-weight: 900;
`;

export const FlatListContainer = styled.FlatList`
  height: 76%;
  padding: 10px 0;
`;

export const FoodItemsContainer = styled.ScrollView``;

export const CheckoutContainer = styled.View`
  height: 10%;
  justify-content: center;
`;

export const EmptyView = styled.View`
  width: 90%;
  margin: 0 auto;
  align-items: center;
  margin: 20px auto;
`;

export const EmptyText = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.softGrey};
  font-size: 20px;
  margin-top: 20px;
`;
