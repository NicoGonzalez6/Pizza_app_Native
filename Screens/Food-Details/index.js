import React from 'react';
import {
  MainContainer,
  ImageContainer,
  Image,
  TitlePriceContainer,
  Title,
  Price,
  DescriptionContainer,
  Description,
  ButtonContainer,
  SelectContainer,
  FlatList,
} from './styles';
import {getBucketUrlAsset} from '../../utils/services';
import Button from '../../Components/Button';
import {useState} from 'react';
import TabSelect from '../../Components/TabSelect';
import GlobalStyles from '../../assets/styles';

const Index = ({route}) => {
  const {item} = route.params;

  console.log(item);

  const [crust, setCrust] = useState(0);

  const data = [
    {
      value: 0,
      label: 'Thin Crust',
    },
    {
      value: 1,
      label: 'Traditional Crust',
    },
  ];

  return (
    <MainContainer>
      <ImageContainer>
        <Image
          resizeMode="contain"
          source={{uri: getBucketUrlAsset(item.productImage)}}></Image>
      </ImageContainer>
      <TitlePriceContainer>
        <Title>{item.productName.toUpperCase()}</Title>
        <Price>${item.productPrice}</Price>
      </TitlePriceContainer>
      <DescriptionContainer>
        <Description>{item.productDescription}</Description>
      </DescriptionContainer>
      <SelectContainer>
        {item.categoryName == 'Pizza' ? (
          <FlatList
            contentContainerStyle={{width: '100%'}}
            data={data}
            keyExtractor={item => item.value}
            renderItem={({item, index}) => {
              return (
                <TabSelect
                  fontStyle={{
                    color:
                      index == crust
                        ? GlobalStyles.colors.white
                        : GlobalStyles.colors.softGrey,
                  }}
                  styles={{
                    backgroundColor:
                      index == crust
                        ? GlobalStyles.colors.mainColor
                        : GlobalStyles.colors.darkerGrey,
                  }}
                  item={item}
                  index={index}
                  setCrust={setCrust}
                />
              );
            }}
          />
        ) : null}
      </SelectContainer>
      <ButtonContainer>
        <Button title="Add to Cart" />
      </ButtonContainer>
    </MainContainer>
  );
};

export default Index;
