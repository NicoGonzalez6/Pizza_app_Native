import React from 'react';
import {Alert, Modal} from 'react-native';
import {
  CenterView,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalImageHeader,
  ModalTitle,
  ModalSubtitle,
  ModalButtons,
} from './styles';
import Button from '../Button';
import SuccessImg from '../../assets/images/success.png';

const Index = ({modalVisible, setModalVisible, title, subtitle}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <CenterView>
        <ModalContent>
          <ModalHeader>
            <ModalImageHeader
              resizeMode="contain"
              source={SuccessImg}></ModalImageHeader>
          </ModalHeader>
          <ModalBody>
            <ModalTitle>{title}</ModalTitle>
            <ModalSubtitle>{subtitle}</ModalSubtitle>
          </ModalBody>
          <ModalButtons>
            <Button
              title={'Ok'}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
          </ModalButtons>
        </ModalContent>
      </CenterView>
    </Modal>
  );
};

export default Index;
