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
import ErrorImg from '../../assets/images/error.png';

const Index = ({modalVisible, setModalVisible, title, subtitle}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <CenterView>
        <ModalContent>
          <ModalHeader>
            <ModalImageHeader
              resizeMode="contain"
              source={ErrorImg}></ModalImageHeader>
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
