import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL} from '../../utils/services';

export const register = createAsyncThunk(
  'register/sessionReducer',
  async (payload, {rejectWithValue}) => {
    try {
      const data = await axios.post(`${URL}/api/v1/auth/register`, {
        name: payload.values.name,
        lastName: payload.values.lastName,
        email: payload.values.email,
        password: payload.values.password,
        profileImage: payload.image,
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  },
);

export const login = createAsyncThunk(
  'login/sessionReducer',
  async (payload, {rejectWithValue}) => {
    try {
      const data = await axios.post(`${URL}/api/v1/auth/login`, {
        email: payload.email,
        password: payload.password,
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  },
);
