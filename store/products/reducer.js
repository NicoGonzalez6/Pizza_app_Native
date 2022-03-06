import {createSlice} from '@reduxjs/toolkit';
import {getCategories} from './actions';

const productReducer = createSlice({
  name: 'productReducer',
  initialState: {
    categories: {},
    getCategoriesSuccess: null,
    isLoading: false,
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
  },
});

export default productReducer.reducer;
