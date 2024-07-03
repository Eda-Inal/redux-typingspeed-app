import { configureStore } from '@reduxjs/toolkit'
import typingReducer from "../redux/typingSlice"

export const store = configureStore({
  reducer: {
    typing : typingReducer
  },
})