import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const View = styled.View`
  flex: 1;
  background-color: ${GlobalStyles.colors.white};
`;

export const ImageContainer = styled.View`
  height: 35%;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  height: 55%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  font-weight: 900;
  font-size: 24px;
  color: ${GlobalStyles.colors.black};
  height: 20%;
`;
export const Subtitle = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  font-size: 15px;
  width: 80%;
  color: ${GlobalStyles.colors.softGrey};
  height: 20%;
  text-align: center;
  line-height: 30px;
`;

export const Image = styled.Image`
  width: 80%;
  height: 100%;
`;
