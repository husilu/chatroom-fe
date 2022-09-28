import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginFetch, User } from '../api/user'

// First, create the thunk
const loginFetchThunk = createAsyncThunk(
  'user/login',
  async (payload:User) => {
    const response = await loginFetch(payload)
    return response.data
  }
)

interface UserInfo {
    nickName: string,
    userName: string,
    avatar: string,
    userId: string
}

interface UserState {
  userInfo: UserInfo,
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
      .addCase(loginFetchThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginFetchThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(loginFetchThunk.rejected, (state, action) => {
        state.loading = false;
      });
  },
})

export { usersSlice, loginFetchThunk };