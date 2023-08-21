// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import valueReducer from './reducer'

const store = configureStore({
  reducer: {
    values: valueReducer, 
  },
});

export default store;
