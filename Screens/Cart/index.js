import React, {useState} from 'react';
import {
  CartMainContainer,
  TitleContainer,
  Title,
  FoodItemsContainer,
  CheckoutContainer,
  FlatListContainer,
  EmptyView,
  EmptyText,
} from './styles';
import {useSelector} from 'react-redux';
import Button from '../../Components/Button';
import CheckoutModal from '../../Components/Checkout-Modal';
import FoodCardCart from '../../Components/Food-Card-Cart';
import {FlatList} from 'react-native';
import LoadingModal from '../../Components/LoadingModal';
import SuccessModal from '../../Components/SuccessModal';

const Cart = ({navigation}) => {
  const {cart, isLoading, orderSuccess} = useSelector(
    state => state.productReducer,
  );

  const [isVisible, setIsVisible] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

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
      <EmptyView>
        <Title>Cart</Title>
        <EmptyText>No Products added to cart yet</EmptyText>
        <SuccessModal
          modalVisible={successModal}
          title={orderSuccess}
          setModalVisible={setSuccessModal}
        />
      </EmptyView>
    );
  }
  return (
    <CartMainContainer>
      <CheckoutModal
        setSuccessModal={setSuccessModal}
        isVisible={isVisible}
        cart={cart}
        closeModal={closeModal}
        navigation={navigation}
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
