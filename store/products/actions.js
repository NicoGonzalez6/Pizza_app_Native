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

export const getProducts = createAsyncThunk(
  'getProducts/productReducer',
  async function (payload, {rejectWithValue}) {
    try {
      const data = await axios.get(`${URL}/api/v1/product/product`);

      return data.data;
    } catch (error) {
      rejectWithValue(error.data);
    }
  },
);

export const createOrder = createAsyncThunk(
  'createOrder/productReducer',
  async function (cart, {rejectWithValue}) {
    console.log(cart);
    try {
      const data = await axios.post(`${URL}/api/v1/order/generate-order`, {
        cart,
      });
      return data.data.msg;
    } catch (error) {
      rejectWithValue(error.data);
    }
  },
);
