import React from 'react';
import {TextInput, Text} from './styles';
import {View} from 'react-native';
import GlobalStyles from '../../assets/styles';
const InputWrapper = ({label, onChangeText, value, secureTextEntry}) => {
  return (
    <View
      style={{
        width: '100%',
        borderBottomColor: GlobalStyles.colors.black,
        borderBottomWidth: 1,
        borderRadius: 2,
      }}>
      <Text>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputWrapper;
