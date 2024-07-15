import { combineReducers } from '@reduxjs/toolkit'
import { slice as authSlice } from '@/entities/auth'
import { baseApi } from '@/shared/api/baseApi'

export const rootReducer = combineReducers({
  auth: authSlice,
  [baseApi.reducerPath]: baseApi.reducer,
})
