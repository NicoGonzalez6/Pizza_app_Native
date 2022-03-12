import React from 'react';
import {MainPriceContainer, PriceNameContainer, Text} from './styles';

const index = ({product}) => {
  return (
    <MainPriceContainer>
      <PriceNameContainer>
        <Text>
          {product.productName} X <Text>{product.amount}</Text>
        </Text>
        <Text>${product.productPrice * product.amount}</Text>
      </PriceNameContainer>
    </MainPriceContainer>
  );
};

export default index;
