import styled from 'styled-components';
import GlobalStyles from '../../assets/styles';

export const RegisterContainer = styled.View`
  height: 600px;
  width: 80%;
  background-color: ${GlobalStyles.colors.white};
  border-radius: 20px;
  elevation: 5;
  padding: 20px 0;
  justify-content: space-between;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  color: ${GlobalStyles.colors.black};
  height: 10%;
`;

export const FormContainer = styled.View`
  width: 80%;
  height: 62%;
  margin: 0 auto;
  justify-content: space-around;
`;

export const ImageContainer = styled.View`
  height: 20%;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 50px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${GlobalStyles.colors.mainColor};
  font-size: 12px;
  margin: 20px auto;
`;

export const ErrorText = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.errorStrong};
  margin: 5px 0;
`;
