import {createSlice} from '@reduxjs/toolkit';
import {getCategories, getProducts} from './actions';

const productReducer = createSlice({
  name: 'productReducer',
  initialState: {
    categories: {},
    products: {},
    getCategoriesSuccess: null,
    getProductsSuccess: null,
    isLoading: false,
    cart: [],
  },
  reducers: {
    addToCart: (state, {payload}) => {
      state.cart = [...state.cart, payload];
    },
  },
  extraReducers: {
    [getCategories.pending]: state => {
      state.isLoading = true;
      state.getCategoriesSuccess = null;
    },
    [getCategories.fulfilled]: (state, {payload}) => {
      state.categories = payload.categories;
      state.getCategoriesSuccess = true;
      state.isLoading = false;
    },
    [getCategories.rejected]: (state, payload) => {
      state.isLoading = false;
      state.getCategoriesSuccess = false;
    },

    [getProducts.pending]: state => {
      state.isLoading = true;
      state.getProductsSuccess = null;
    },
    [getProducts.fulfilled]: (state, {payload}) => {
      state.products = payload.products;
      state.getProductsSuccess = true;
      state.isLoading = false;
    },
    [getProducts.rejected]: (state, payload) => {
      state.isLoading = false;
      state.getProductsSuccess = false;
    },
  },
});

export default productReducer.reducer;

export const {addToCart} = productReducer.actions;
