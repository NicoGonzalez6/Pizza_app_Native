import {createSlice} from '@reduxjs/toolkit';
import {register, login} from './actions';

const initialState = {
  isLogged: false,
  isLoading: false,
  registerSuccess: null,
  loginError: null,
  isFirstTimeRunningApp: true,
  userName: '',
  userAddres: '',
  userimage: '',
  userEmail: '',
  errorMsg: '',
};

const sessionReducer = createSlice({
  name: 'sessionReducer',
  initialState: initialState,
  reducers: {
    onboardingNext: state => {
      state.isFirstTimeRunningApp = false;
    },
    setLoadingTrue: state => {
      state.isLoading = true;
    },
    setLoadingFalse: state => {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [register.pending]: state => {
      state.registerSuccess = null;
      state.isLoading = true;
    },
    [register.fulfilled]: state => {
      state.registerSuccess = true;
      state.isLoading = false;
    },
    [register.rejected]: (state, action) => {
      state.registerSuccess = false;
      state.isLoading = false;
      state.errorMsg = action.payload;
    },

    [login.pending]: (state, action) => {
      state.isLoading = true;
      state.loginError = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.loginError = false;
      state.name = action.payload.user.name;
      state.lastName = action.payload.user.lastName;
      state.userimage = action.payload.user.profileImage;
      state.userEmail = action.payload.user.userEmail;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.loginError = true;
      state.errorMsg = action.payload;
    },
  },
});

export const {onboardingNext, setLoadingFalse, setLoadingTrue} =
  sessionReducer.actions;

export default sessionReducer.reducer;
