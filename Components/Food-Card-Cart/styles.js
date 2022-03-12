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
  align-items: flex-start;
  padding: 0 10px;
  justify-content: space-around;
  padding: 10px 0;
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
  font-size: 14px;
  transform: translateY(-5px);
`;

export const PriceContainer = styled.View`
  width: 90%;
  margin: 0 auto;
  height: 25%;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
  flex-direction: row;
`;

export const PriceBox = styled.View`
  width: 40%;
  height: 25px;
  justify-content: center;
  align-items: center;
  background-color: ${GlobalStyles.colors.mainColor};
  border-radius: 5px;
  elevation: 3;
`;

export const Price = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.white};
  font-size: 14px;
  margin-top: 2px;
`;

export const ArrowContainer = styled.View`
  flex-direction: row;
  width: 25%;
  justify-content: space-between;
  align-items: center;
`;

export const Amount = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.softGrey};
  font-size: 16px;
`;
