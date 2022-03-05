import * as yup from 'yup';

export const loginInitialValues = {
  email: '',
  password: '',
};

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(4, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export const registerInitialValues = {
  name: '',
  lastName: '',
  email: '',
  password: '',
};

export const registerValidationSchema = yup.object().shape({
  name: yup.string().required('Name is Required'),
  lastName: yup.string().required('Last name is Required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(4, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
