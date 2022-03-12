import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import GlobalStyles from '../../assets/styles';
import {
  LoginContainer,
  LoginLogo,
  LogoContainer,
  LoginTitle,
  FormContainer,
  Text,
  Register,
  ErrorText,
} from './styles';
import InputWrapper from '../../Components/InputFormWrapper';
import Button from '../../Components/Button';
import {Formik} from 'formik';
import {
  loginValidationSchema,
  loginInitialValues,
} from '../../utils/validations';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/session/actions';
import LoadingModal from '../../Components/LoadingModal';
import ErrorModal from '../../Components/ErrorModal';

const Login = ({navigation}) => {
  const registerScreen = () => {
    navigation.navigate('Register');
  };

  const Dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);

  const {errorMsg, isLoading, loginError} = useSelector(
    state => state.sessionReducer,
  );

  return (
    <LinearGradient
      colors={[GlobalStyles.colors.mainColor, GlobalStyles.colors.white]}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LoadingModal loadingVisible={isLoading} />
      <ErrorModal
        modalVisible={loginError && modalVisible}
        setModalVisible={setModalVisible}
        title={errorMsg}></ErrorModal>
      <LoginContainer>
        <LogoContainer>
          <LoginLogo
            resizeMode="contain"
            source={require('../../assets/images/loginImage.jpg')}
          />
          <LoginTitle>Domino´s Pizza</LoginTitle>
        </LogoContainer>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={loginInitialValues}
          onSubmit={values => {
            Dispatch(login(values));
            setModalVisible(true);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <FormContainer>
              <InputWrapper
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                label={'Email address :'}
                value={values.email}
              />
              {errors.email && touched.email && (
                <ErrorText>{errors.email}</ErrorText>
              )}
              <InputWrapper
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                label={'Password :'}
                value={values.password}
                secureTextEntry={true}
              />
              {errors.password && touched.password && (
                <ErrorText>{errors.password}</ErrorText>
              )}
              <Text>Forgot your password?</Text>
              <Button onPress={handleSubmit} title="Login"></Button>
            </FormContainer>
          )}
        </Formik>
        <Register
          onPress={() => {
            registerScreen();
          }}>
          Dont have an account yet? Register!
        </Register>
      </LoginContainer>
    </LinearGradient>
  );
};

export default Login;
