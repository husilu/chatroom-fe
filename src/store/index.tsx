import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './user';
import { themeSlice } from './theme';
import thunk from "redux-thunk";

export const store =  configureStore({
  reducer: {
    user: usersSlice.reducer,
    theme: themeSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch