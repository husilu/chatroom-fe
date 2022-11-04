import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  theme: string | null
}

const initialState: CounterState = {
    theme: localStorage.getItem('theme') || "theme-pink1"
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
        state.theme = action.payload
        localStorage.setItem('theme', action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer