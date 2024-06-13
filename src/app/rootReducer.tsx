import { baseApi } from '@/entities/auth/api/baseApi'
import { combineReducers } from '@reduxjs/toolkit'
import { slice as authSlice } from '@/entities/auth'

export const rootReducer = combineReducers({
  auth: authSlice,
  [baseApi.reducerPath]: baseApi.reducer
})
