import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const MainContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${GlobalStyles.colors.white};
  padding: 20px;
`;

export const ImageContainer = styled.View`
  height: 40%;
  width: 90%;
  margin: 0 auto;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const TitlePriceContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const Title = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  font-weight: 900;
  font-size: 22px;
  color: ${GlobalStyles.colors.black};
`;

export const Price = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  font-weight: 900;
  font-size: 22px;
  color: ${GlobalStyles.colors.mainColor};
`;

export const DescriptionContainer = styled.View`
  width: 100%;
  margin: 5px 0;
`;

export const Description = styled.Text`
  text-align: justify;
  color: ${GlobalStyles.colors.softGrey};
  font-weight: 500;
  line-height: 18px;
`;

export const SelectContainer = styled.View`
  margin-top: 10px;
`;

export const FlatList = styled.FlatList`
  width: 100%;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-end;
`;
