import React from 'react';
import {
  CartMainContainer,
  TitleContainer,
  Title,
  FoodItemsContainer,
  CheckoutContainer,
} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../Components/Button';

import FoodCardCart from '../../Components/Food-Card-Cart';
import {FlatList} from 'react-native';

const Cart = ({navigation}) => {
  const {cart} = useSelector(state => state.productReducer);

  return (
    <CartMainContainer>
      <TitleContainer>
        <Title>Cart</Title>
      </TitleContainer>
      <FoodItemsContainer>
        <FlatList
          data={cart}
          keyExtractor={item => item.idProduct}
          renderItem={({item, index}) => {
            return (
              <FoodCardCart item={item} index={index} navigation={navigation} />
            );
          }}
        />
      </FoodItemsContainer>
      <CheckoutContainer>
        <Button title="Checkout"></Button>
      </CheckoutContainer>
    </CartMainContainer>
  );
};

export default Cart;
