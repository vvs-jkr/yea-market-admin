import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { TypedUseSelectorHook } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { baseApi } from '@/entities/auth/api/baseApi'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
