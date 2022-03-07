import React from 'react';
import {Text, View} from 'react-native';

const Index = ({route}) => {
  const {item} = route.params;

  console.log(item);
  return (
    <View>
      <Text>details</Text>
    </View>
  );
};

export default Index;
