import React from 'react';
import {View} from 'react-native';

export default function Line({width, color}) {
  return (
    <View
      style={{
        height: 5,
        width: width,
        borderRadius: 10,
        backgroundColor: color,
        marginVertical: 20,
      }}
    />
  );
}
