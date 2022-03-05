import {configureStore} from '@reduxjs/toolkit';
import sessionReducer from './session/reducer';

export const store = configureStore({
  reducer: {sessionReducer},
});
