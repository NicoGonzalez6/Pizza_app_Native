import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const Pressable = styled.TouchableOpacity`
  height: 160px;
  border: 2px solid ${GlobalStyles.colors.softGrey};
  border-radius: 10px;
  flex-direction: row;
  background-color: #fff;
  margin: 10px 0;
`;

export const ImageContainer = styled.View`
  width: 40%;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const DescriptionContainer = styled.View`
  width: 60%;
  height: 100%;
  align-items: center;
  padding: 0 10px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color:${GlobalStyles.colors.black}
  font-weight: 900;
  font-size: 20px;
`;

export const Description = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.softGrey};
  font-size: 12px;
  padding: 10px 0px;
`;

export const PriceContainer = styled.View`
  width: 100%;
  margin: 0 auto;
  height: 10%;
  font-size: 12px;
  align-items: flex-end;
  padding: 0 10px;
`;

export const PriceBox = styled.View`
  width: 40%;
  height: 25px;
  justify-content: center;
  align-items: center;
  background-color: ${GlobalStyles.colors.mainColor};
  border-radius: 5px;
  elevation: 5;
`;

export const Price = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.white};
  font-size: 14px;
  margin-top: 2px;
`;
