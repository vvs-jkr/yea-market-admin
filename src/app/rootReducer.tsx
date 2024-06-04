import { authApi } from '@/entities/auth/api/authApi'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer
})
