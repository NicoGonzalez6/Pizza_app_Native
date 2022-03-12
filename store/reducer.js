import {configureStore} from '@reduxjs/toolkit';
import sessionReducer from './session/reducer';
import productReducer from './products/reducer';

export const store = configureStore({
  reducer: {sessionReducer, productReducer},
});
