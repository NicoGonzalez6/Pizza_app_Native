import React, {useState} from 'react';
import {
  RegisterContainer,
  Title,
  FormContainer,
  ButtonContainer,
  Text,
  ImageContainer,
  Image,
  ErrorText,
} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import GlobalStyles from '../../assets/styles';
import InputFormWrapper from '../../Components/InputFormWrapper';
import Button from '../../Components/Button/index';
import {launchImageLibrary} from 'react-native-image-picker';
import {Formik} from 'formik';
import {
  registerInitialValues,
  registerValidationSchema,
} from '../../utils/validations';
import axios from 'axios';
import {URL, getBucketUrlAsset} from '../../utils/services';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../store/session/actions';
import Modal from '../../Components/SuccessModal';
import ErrorModal from '../../Components/ErrorModal';
import {
  successRegisterSubtitle,
  successRegisterTitle,
  errorSubtitleRegister,
} from '../../utils/constants';
import LoadingModal from '../../Components/LoadingModal';

const Register = ({navigation}) => {
  const Dispatch = useDispatch();

  const LoginScreen = () => {
    navigation.navigate('Login');
  };

  const modalSuccessHandler = () => {
    setModalVisible(false);
    LoginScreen();
  };

  const [image, setImage] = useState('/profilePic/default.jpg');

  const [modalVisible, setModalVisible] = useState(false);

  const {registerSuccess, errorMsg, isLoading} = useSelector(
    state => state.sessionReducer,
  );

  const selectImage = () => {
    const options = {
      title: 'seleccionar una imagen',
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.errorCode) {
        console.log(response.errorMessage);
      } else if (response.didCancel) {
        console.log('User Cancel the operation');
      } else {
        const values = response.assets[0].base64;

        axios
          .post(`${URL}/api/v1/auth/profilePic-uploadApp`, {
            values,
          })
          .then(response => setImage(response.data.image))
          .catch(e => console.log(e));
      }
    });
  };

  const dispatchHandler = values => {
    Dispatch(register({values, image}));
    setModalVisible(true);
  };

  return (
    <LinearGradient
      colors={[GlobalStyles.colors.mainColor, GlobalStyles.colors.white]}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LoadingModal loadingVisible={isLoading} />
      <RegisterContainer>
        <Title>Register</Title>
        <ImageContainer>
          <Image
            resizeMode="contain"
            source={{uri: getBucketUrlAsset(image)}}></Image>
          <Text
            onPress={() => {
              selectImage();
            }}>
            Add Profile Image
          </Text>
        </ImageContainer>
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={registerInitialValues}
          onSubmit={values => {
            dispatchHandler(values);
          }}>
          {({handleChange, handleBlur, handleSubmit, errors, touched}) => (
            <>
              <FormContainer>
                <Modal
                  modalVisible={registerSuccess == true && modalVisible}
                  setModalVisible={modalSuccessHandler}
                  title={successRegisterTitle}
                  subtitle={successRegisterSubtitle}
                />
                <ErrorModal
                  modalVisible={registerSuccess == false && modalVisible}
                  setModalVisible={setModalVisible}
                  title={errorMsg}
                  subtitle={errorSubtitleRegister}
                />

                <InputFormWrapper
                  label={'Name'}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
                {errors.name && touched.name && (
                  <ErrorText>{errors.name}</ErrorText>
                )}
                <InputFormWrapper
                  label={'Last name'}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                />
                {errors.lastName && touched.lastName && (
                  <ErrorText>{errors.lastName}</ErrorText>
                )}
                <InputFormWrapper
                  label={'Email'}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}></InputFormWrapper>
                {errors.email && touched.email && (
                  <ErrorText>{errors.email}</ErrorText>
                )}
                <InputFormWrapper
                  label={'Password'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry={true}
                />
                {errors.password && touched.password && (
                  <ErrorText>{errors.password}</ErrorText>
                )}
                <Button onPress={handleSubmit} title="Register"></Button>
              </FormContainer>
            </>
          )}
        </Formik>

        <ButtonContainer>
          <Text
            onPress={() => {
              LoginScreen();
            }}>
            Already have an account? Login!
          </Text>
        </ButtonContainer>
      </RegisterContainer>
    </LinearGradient>
  );
};

export default Register;
