import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const ModalContainer = styled.View`
  position: absolute;
  background-color: #000000aa;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  height: 70%;
  width: 80%;
  background-color: ${GlobalStyles.colors.white};
  border-radius: 20px;
  padding: 30px 10px;
  align-items: center;
  position: relative;
`;

export const Title = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  font-size: 20px;
  color: ${GlobalStyles.colors.black};
`;

export const ModalCartContainer = styled.View`
  height: 75%;
  width: 100%;
  margin: 20px 0;
`;

export const TotalPriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width:90%
  margin:0 auto;
  margin-bottom:20px;
`;

export const TotalPrice = styled.Text`
  color: ${GlobalStyles.colors.black};
`;

export const TouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 15px;
`;

export const Image = styled.Image`
  width: 30px;
  height: 30px;
`;
