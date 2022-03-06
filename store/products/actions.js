import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL} from '../../utils/services';

export const getCategories = createAsyncThunk(
  'getCategories/productReducer',
  async function (payload, {rejectWithValue}) {
    try {
      const data = await axios.get(`${URL}/api/v1/product/category`);

      return data.data;
    } catch (error) {
      rejectWithValue(error.data);
    }
  },
);
