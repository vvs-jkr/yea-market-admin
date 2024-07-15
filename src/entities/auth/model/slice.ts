import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ErrorsMessagesType } from '@/shared/constants/errorMessages'

export type ErrorType = string

const initialState: {
  errors: ErrorType[]
} = {
  errors: []
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    pushErrors(state, action: PayloadAction<ErrorsMessagesType>) {
      const errorsNames = Object.keys(action.payload)
      state.errors = [...errorsNames]
    },
    deleteError(state) {
      state.errors.shift()
    },
    logout(state) {
      state.errors = []
    }
  }
})

export default authSlice.reducer
export const { pushErrors, deleteError, logout } = authSlice.actions
