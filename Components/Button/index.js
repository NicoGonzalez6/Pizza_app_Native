import React from 'react';
import {Pressable, Text} from './styles';

const Button = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;
