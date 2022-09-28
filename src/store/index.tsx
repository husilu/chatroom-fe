import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/index';
import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    user: userReducer.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})