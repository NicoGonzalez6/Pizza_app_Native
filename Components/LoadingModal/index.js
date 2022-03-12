import React from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
import {LoadingContainer, LoadingCenter, Text} from './styles';
import GlobalStyles from '../../assets/styles';

const LoadingModal = ({loadingVisible}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={loadingVisible}>
      <LoadingContainer>
        <LoadingCenter>
          <ActivityIndicator
            size="large"
            color={GlobalStyles.colors.mainColor}
          />
          <Text>Loading...</Text>
        </LoadingCenter>
      </LoadingContainer>
    </Modal>
  );
};

export default LoadingModal;
