import {createSlice} from '@reduxjs/toolkit';
import {
  getCategories,
  getProducts,
  createOrder,
  getUserOrders,
} from './actions';
import {current} from '@reduxjs/toolkit';

const productReducer = createSlice({
  name: 'productReducer',
  initialState: {
    categories: {},
    products: {},
    getCategoriesSuccess: null,
    getProductsSuccess: null,
    isLoading: false,
    cart: [],
    orderSuccess: '',
    userOrders: [],
  },
  reducers: {
    addToCart: (state, {payload}) => {
      state.cart = [...state.cart, payload];
    },
    incrementAmount: (state, {payload}) => {
      const id = payload[0].idProduct;

      state.cart = current(state.cart).map(e => {
        if (e.idProduct == id) {
          return (e = {...payload[0]});
        } else {
          return e;
        }
      });
    },
    decrementAmount: (state, {payload}) => {
      const id = payload[0].idProduct;

      state.cart = current(state.cart).map(e => {
        if (e.idProduct == id) {
          return (e = {...payload[0]});
        } else {
          return e;
        }
      });
    },
    removeFromCart: (state, {payload}) => {
      state.cart = payload;
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

    [getUserOrders.pending]: state => {},
    [getUserOrders.fulfilled]: (state, {payload}) => {
      state.userOrders = payload;
    },
    [getUserOrders.rejected]: (state, payload) => {},

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

    [createOrder.pending]: state => {
      state.isLoading = true;
    },
    [createOrder.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.orderSuccess = payload;
      state.cart = [];
    },
    [createOrder.rejected]: (state, payload) => {
      state.isLoading = false;
    },
  },
});

export default productReducer.reducer;

export const {addToCart, removeFromCart, incrementAmount, decrementAmount} =
  productReducer.actions;
