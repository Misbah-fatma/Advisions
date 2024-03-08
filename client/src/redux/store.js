import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './cart/reducer';
const store = configureStore({
    reducer: rootReducers,
  

})

export default store;
