import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginFetch, User, registerFetch } from '../api/user'

// First, create the thunk
const loginFetchThunk = createAsyncThunk(
  'user/login',
  async (payload:User) => {
    const response = await loginFetch(payload)
    return response
  }
)

const registerFetchThunk = createAsyncThunk(
  'user/register',
  async (payload:User) => {
    const response = await registerFetch(payload)
    return response
  }
)

interface UserInfo {
    nickname: string,
    username: string,
    avatar: string,
    id: string,
    email: string
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
        state.userInfo = action.payload as unknown as UserInfo
      })
      .addCase(loginFetchThunk.rejected, (state, action) => {
        state.loading = false;
      });
      build
      .addCase(registerFetchThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerFetchThunk.fulfilled, (state, action) => {
        state.loading = false;
        // state.userInfo = action.payload as unknown as UserInfo
      })
      .addCase(registerFetchThunk.rejected, (state, action) => {
        state.loading = false;
      });
  },
})

export { usersSlice, loginFetchThunk, registerFetchThunk };

export type { UserInfo };