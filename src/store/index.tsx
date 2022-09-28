import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './user';
import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    user: usersSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})