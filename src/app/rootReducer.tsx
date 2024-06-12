import { baseApi } from '@/entities/auth/api/baseApi'
import { combineReducers } from '@reduxjs/toolkit'
import { slice as ErrorsSlice } from '@/entities/auth'

export const rootReducer = combineReducers({
  errors: ErrorsSlice,
  [baseApi.reducerPath]: baseApi.reducer
})
