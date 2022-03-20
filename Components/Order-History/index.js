import React from 'react';
import {View} from 'react-native';
import {OrderHistoryContainer, Text} from './styles';
import {format} from 'date-fns';

const index = ({item}) => {
  console.log(item);

  const date = format(new Date(item.createdAt), 'dd-MM-yyyy');

  return (
    <OrderHistoryContainer>
      <Text>Date : {date}</Text>
      <Text>Total : ${item.total}</Text>
    </OrderHistoryContainer>
  );
};

export default index;
