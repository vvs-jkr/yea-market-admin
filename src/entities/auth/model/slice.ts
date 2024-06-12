import { ErrorsMessagesType, errorMessages } from '@/shared/constants/errorMessages'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type ErrorType = string

const initialState: {
  errorsQueue: ErrorType[]
} = {
  errorsQueue: []
}

const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    addErrorToQueue(state, action: PayloadAction<ErrorsMessagesType>) {
      const errorsNames = Object.keys(action.payload)
      errorsNames.forEach((errorName) => {
        const errorMessage = errorMessages[errorName]
        state.errorsQueue.push(errorMessage)
      })
    },
    removeErrorFromQueue(state) {
      state.errorsQueue.slice(1)
    }
  }
})

export default errorsSlice.reducer

export const { addErrorToQueue, removeErrorFromQueue } = errorsSlice.actions
