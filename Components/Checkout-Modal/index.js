import React, {useEffect} from 'react';
import {FlatList, Modal, View} from 'react-native';
import {
  ModalContainer,
  ModalContent,
  Title,
  ModalCartContainer,
  TotalPrice,
  TotalPriceContainer,
  Image,
  TouchableOpacity,
} from './styles';
import ProductPriceCheckout from '../ProductModalCheckout';
import Button from '../Button';
import CloseImg from '../../assets/images/close.png';
import {useDispatch} from 'react-redux';
import {createOrder} from '../../store/products/actions';

const CheckoutModal = ({isVisible, cart, closeModal, setSuccessModal}) => {
  const Dispatch = useDispatch();

  let initial = 0;

  const values = cart?.map(
    product => Number(product.productPrice) * product.amount,
  );

  values.map(value => (initial += Number(value)));

  const confirmOrderHandler = () => {
    Dispatch(createOrder(cart));
    closeModal();
    setSuccessModal(true);
  };

  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <ModalContainer>
        <ModalContent>
          <Title>Your Products</Title>
          <TouchableOpacity onPress={closeModal} activeOpacity={0.5}>
            <Image source={CloseImg}></Image>
          </TouchableOpacity>
          <ModalCartContainer>
            <FlatList
              data={cart}
              keyExtractor={item => item.idProduct}
              renderItem={({item, index}) => {
                return (
                  <ProductPriceCheckout product={item}></ProductPriceCheckout>
                );
              }}
            />
            <TotalPriceContainer>
              <TotalPrice>Total</TotalPrice>
              <TotalPrice>$ {initial.toString().slice(0, 5)}</TotalPrice>
            </TotalPriceContainer>
          </ModalCartContainer>
          <Button title="Confirm Order" onPress={confirmOrderHandler}></Button>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default CheckoutModal;
