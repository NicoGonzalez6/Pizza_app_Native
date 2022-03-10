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
import {addToCart} from '../../store/products/reducer';
import {useDispatch, useSelector} from 'react-redux';
import SuccessModal from '../../Components/SuccessModal';
import ErrorModal from '../../Components/ErrorModal';

const Index = ({route}) => {
  const {item} = route.params;

  const [crust, setCrust] = useState(1);
  const [portion, setPortion] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [errorIsVisible, setErrorIsVisible] = useState(false);

  const {cart} = useSelector(state => state.productReducer);

  const Dispatch = useDispatch();

  const cartIds = cart.map(product => product.idProduct);

  const data = [
    {
      value: 1,
      label: 'Thin Crust',
    },
    {
      value: 2,
      label: 'Traditional Crust',
    },
  ];

  const extra = [
    {
      value: 1,
      label: 'normal',
    },
    {
      value: 2,
      label: 'extra',
    },
  ];

  const cartObject = {
    idProduct: item.idProduct,
    productImage: item.productImage,
    productName: item.productName,
    productPrice: item.productPrice,
    productType: item.productType,
    categoryName: item.categoryName,
    amount: 1,
    extra:
      item.categoryName == 'Snacks'
        ? extra.filter(extra => portion == extra.value)[0].value
        : null,
    pizzaCurst:
      item.categoryName == 'Pizza'
        ? data.filter(data => crust == data.value)[0].value
        : null,
  };

  const cartHandler = () => {
    if (cartIds.includes(cartObject.idProduct)) {
      setErrorIsVisible(true);
      return;
    } else {
      return Dispatch(addToCart(cartObject)), setIsVisible(true);
    }
  };

  return (
    <MainContainer>
      <ImageContainer>
        <SuccessModal
          modalVisible={isVisible}
          setModalVisible={setIsVisible}
          title={`Successfully added to cart`}
          subtitle={`${item.productName} added to the cart`}
        />
        <ErrorModal
          modalVisible={errorIsVisible}
          setModalVisible={setErrorIsVisible}
          title={`The product already exists`}
          subtitle={`${item.productName} is already added to the cart`}
        />
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
                      index + 1 == crust
                        ? GlobalStyles.colors.white
                        : GlobalStyles.colors.softGrey,
                  }}
                  styles={{
                    backgroundColor:
                      index + 1 == crust
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
        {item.categoryName == 'Snacks' ? (
          <FlatList
            contentContainerStyle={{width: '100%'}}
            data={extra}
            keyExtractor={item => item.value}
            renderItem={({item, index}) => {
              return (
                <TabSelect
                  fontStyle={{
                    color:
                      index + 1 == portion
                        ? GlobalStyles.colors.white
                        : GlobalStyles.colors.softGrey,
                  }}
                  styles={{
                    backgroundColor:
                      index + 1 == portion
                        ? GlobalStyles.colors.mainColor
                        : GlobalStyles.colors.darkerGrey,
                  }}
                  item={item}
                  index={index}
                  setCrust={setPortion}
                />
              );
            }}
          />
        ) : null}
      </SelectContainer>
      <ButtonContainer>
        <Button title="Add to Cart" onPress={cartHandler} />
      </ButtonContainer>
    </MainContainer>
  );
};

export default Index;
