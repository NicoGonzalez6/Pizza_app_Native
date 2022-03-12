import React from 'react';
import {
  View,
  ImageContainer,
  Image,
  TitleContainer,
  Title,
  Subtitle,
  Pressable,
  Text,
} from './styles';
import Line from '../../Components/Line';
import GlobalStyles from '../../assets/styles';
import {onboardingNext} from '../../store/session/reducer';
import {useDispatch} from 'react-redux';
import Button from '../../Components/Button';

const Onboarding = () => {
  const Dispatch = useDispatch();

  const onBoardingHandler = () => {
    Dispatch(onboardingNext());
  };

  return (
    <View>
      <ImageContainer>
        <Image
          resizeMode="contain"
          source={require('../../assets/images/onboarding.png')}></Image>
        <Line width={'15%'} color={GlobalStyles.colors.mainColor}></Line>
      </ImageContainer>
      <TitleContainer>
        <Title>Welcome to Domino´s Pizza</Title>
        <Subtitle>
          More than 20 pizzas and drinks options for every taste!
        </Subtitle>
      </TitleContainer>
      <Button onPress={onBoardingHandler} title={'Get started'} />
    </View>
  );
};

export default Onboarding;
