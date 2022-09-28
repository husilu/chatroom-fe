import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from './userAPI'

// First, create the thunk
const loginFetch = createAsyncThunk(
  'user/login',
  async (payload) => {
    const response = await userAPI.fetchById(payload)
    return response.data
  }
)

interface User {
    nickName: string,
    userName: string,
    avatar: string,
    userId: string
}

interface UserState {
  userInfo: User,
  loading: boolean
}

const initialState = {
    userInfo: {},
    loading: false
} as UserState

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(build) {
    build
      .addCase(loginFetch.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(loginFetch.rejected, (state, action) => {
        state.loading = false;
      });
  },
})

export { usersSlice, loginFetch };