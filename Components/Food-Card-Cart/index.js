import React from 'react';
import {
  Pressable,
  ImageContainer,
  DescriptionContainer,
  Image,
  Title,
  Description,
  PriceContainer,
  PriceBox,
  Price,
} from './styles';
import {getBucketUrlAsset} from '../../utils/services';

const Item = ({item, index, navigation}) => {
  console.log(item);
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Details', {
          item,
        })
      }>
      <ImageContainer>
        <Image
          resizeMode="contain"
          source={{uri: getBucketUrlAsset(item.productImage)}}></Image>
      </ImageContainer>
      <DescriptionContainer>
        <Title>{item.productName}</Title>
        {item.categoryName == 'Pizza' ? (
          <Description>
            {item.pizzaCurst == 1 ? 'Thin Crust' : 'Traditional Crust'}
          </Description>
        ) : null}
        <PriceContainer>
          <PriceBox>
            <Price>${item.productPrice}</Price>
          </PriceBox>
        </PriceContainer>
      </DescriptionContainer>
    </Pressable>
  );
};

export default Item;
