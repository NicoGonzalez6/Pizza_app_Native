import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const ProfileMainContainer = styled.View`
  width: 90%;
  margin: 0 auto;
  flex: 1;
`;

export const TitleContainer = styled.View`
  height: 10%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.black};
  font-size: 30px;
  font-weight: 900;
`;

export const ProfileContainer = styled.View`
  height: 30%;
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  width: 35%;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  height:50%
  border-radius:50px;
  width:80%
`;

export const ProfileInfoContainer = styled.View`
  width: 70%;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10px;
`;

export const ProfileName = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.black};
  font-size: 18px;
  font-weight: 900;
`;

export const ProfileEmail = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.softGrey};
  font-size: 12px;
  margin: 5px 0;
`;

export const Logout = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: blue;
  font-size: 12px;
`;
