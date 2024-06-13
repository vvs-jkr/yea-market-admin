import { ErrorsMessagesType } from '@/shared/constants/errorMessages'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type ErrorType = string

const initialState: {
  errors: ErrorType[]
} = {
  errors: []
}

const authSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    pushErrors(state, action: PayloadAction<ErrorsMessagesType>) {
      const errorsNames = Object.keys(action.payload)
      state.errors = [...errorsNames]
    },
    deleteError(state) {
      state.errors.shift()
    }
  }
})

export default authSlice.reducer

export const { pushErrors, deleteError } = authSlice.actions
