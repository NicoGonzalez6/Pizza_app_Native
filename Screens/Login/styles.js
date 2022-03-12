import styled from 'styled-components';
import GlobalStyles, {colors} from '../../assets/styles';

export const LoginContainer = styled.View`
  min-height: 500px;
  max-height: 600px;
  width: 80%;
  background-color: ${GlobalStyles.colors.white};
  border-radius: 20px;
  elevation: 5;
`;

export const LogoContainer = styled.View`
  height: 30%;
  align-items: center;
  margin: 20px 0;
`;

export const LoginLogo = styled.Image`
  width: 120px;
  height: 120px;
`;

export const LoginTitle = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.softGrey};
  margin: 5px 0;
`;

export const FormContainer = styled.View`
  width: 80%;
  height: 45%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.mainColor};
  font-size: 12px;
`;

export const Register = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.mainColor};
  text-align: center;
  margin: 30px 0;
  font-size: 12px;
`;

export const ErrorText = styled.Text`
  font-family: ${GlobalStyles.fonts.mainFont};
  color: ${GlobalStyles.colors.errorStrong};
  margin: 5px 0;
`;
