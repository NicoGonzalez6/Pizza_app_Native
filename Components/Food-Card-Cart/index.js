import React from 'react';
import {
  Pressable,
  ImageContainer,
  DescriptionContainer,
  Image,
  Title,
  Description,
  PriceContainer,
  PriceBox,
  Price,
  ArrowContainer,
  Amount,
} from './styles';
import {getBucketUrlAsset} from '../../utils/services';
import {useDispatch} from 'react-redux';
import {
  incrementAmount,
  removeFromCart,
  decrementAmount,
} from '../../store/products/reducer';
import {useSelector} from 'react-redux';
import FontAwson from 'react-native-vector-icons/FontAwesome';
import GlobalStyle from '../../assets/styles';

const Item = ({item, index, navigation}) => {
  const Dispatch = useDispatch();

  const {cart} = useSelector(state => state.productReducer);

  console.log(cart);

  const cartFilter = id => {
    return cart.filter(product => product.idProduct != id);
  };

  const cartIncrement = id => {
    const filteredCart = cart.filter(product => product.idProduct == id);

    let amount = filteredCart.map(e => e.amount)[0];

    return filteredCart.map(e => {
      return {...e, amount: (amount += 1)};
    });
  };

  const cartDecrement = id => {
    const filteredCart = cart.filter(product => product.idProduct == id);

    let amount = filteredCart.map(e => e.amount)[0];

    return filteredCart.map(e => {
      return {...e, amount: (amount -= 1)};
    });
  };

  return (
    <Pressable
      onPress={() => Dispatch(removeFromCart(cartFilter(item.idProduct)))}>
      <ImageContainer>
        <Image
          resizeMode="contain"
          source={{uri: getBucketUrlAsset(item.productImage)}}></Image>
      </ImageContainer>
      <DescriptionContainer>
        <Title>{item.productName}</Title>
        {item.categoryName == 'Pizza' ? (
          <Description>
            {item.pizzaCurst == 1 ? 'Thin Crust' : 'Traditional Crust'}
          </Description>
        ) : null}
        {item.categoryName == 'Snacks' ? (
          <Description>
            {item.pizzaCurst == 1 ? 'Normal Portion' : 'Extra Portion'}
          </Description>
        ) : null}

        <PriceContainer>
          <ArrowContainer>
            <FontAwson
              name="minus"
              onPress={() => {
                if (item.amount == 1) {
                  return;
                } else {
                  Dispatch(decrementAmount(cartDecrement(item.idProduct)));
                }
              }}
              style={{
                backgroundColor: GlobalStyle.colors.mainColor,
                padding: 4,
                borderRadius: 50,
                color: GlobalStyle.colors.white,
                fontSize: 8,
              }}
            />

            <Amount>{item.amount}</Amount>
            <FontAwson
              onPress={() =>
                Dispatch(incrementAmount(cartIncrement(item.idProduct)))
              }
              name="plus"
              style={{
                backgroundColor: GlobalStyle.colors.mainColor,
                padding: 4,
                borderRadius: 50,
                color: GlobalStyle.colors.white,
                fontSize: 8,
              }}
            />
          </ArrowContainer>
          <PriceBox>
            <Price>${item.productPrice}</Price>
          </PriceBox>
        </PriceContainer>
      </DescriptionContainer>
    </Pressable>
  );
};

export default Item;
