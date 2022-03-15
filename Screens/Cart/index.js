import React, {useState} from 'react';
import {
  CartMainContainer,
  TitleContainer,
  Title,
  FoodItemsContainer,
  CheckoutContainer,
  FlatListContainer,
  EmptyCart,
  EmptyTitle,
} from './styles';
import {useSelector} from 'react-redux';
import Button from '../../Components/Button';
import CheckoutModal from '../../Components/Checkout-Modal';
import FoodCardCart from '../../Components/Food-Card-Cart';
import {FlatList} from 'react-native';
import LoadingModal from '../../Components/LoadingModal';

const Cart = ({navigation}) => {
  const {cart, isLoading} = useSelector(state => state.productReducer);

  const [isVisible, setIsVisible] = useState(false);

  // Warning Fix
  function VirtualizedView(props) {
    return (
      <FlatListContainer
        data={[]}
        ListEmptyComponent={null}
        keyExtractor={() => 'dummy'}
        renderItem={null}
        ListHeaderComponent={() => (
          <React.Fragment>{props.children}</React.Fragment>
        )}
      />
    );
  }
  const closeModal = () => {
    setIsVisible(false);
  };

  if (cart.length == 0) {
    return (
      <EmptyCart>
        <Title>Cart</Title>
        <EmptyTitle>No product added to the cart yet</EmptyTitle>
      </EmptyCart>
    );
  }

  return (
    <CartMainContainer>
      <CheckoutModal
        isVisible={isVisible}
        cart={cart}
        closeModal={closeModal}
      />
      <TitleContainer>
        <Title>Cart</Title>
      </TitleContainer>
      <LoadingModal loadingVisible={isLoading} />
      <VirtualizedView>
        <FoodItemsContainer>
          <FlatList
            data={cart}
            keyExtractor={item => item.idProduct}
            renderItem={({item, index}) => {
              return (
                <FoodCardCart
                  item={item}
                  index={index}
                  navigation={navigation}
                />
              );
            }}
          />
        </FoodItemsContainer>
      </VirtualizedView>
      <CheckoutContainer>
        {cart.length >= 1 ? (
          <Button title="Checkout" onPress={() => setIsVisible(true)}></Button>
        ) : null}
      </CheckoutContainer>
    </CartMainContainer>
  );
};

export default Cart;
