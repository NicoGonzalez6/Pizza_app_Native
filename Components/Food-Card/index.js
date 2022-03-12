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
        <Description>{item.productDescription.slice(0, 70)}...</Description>
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
