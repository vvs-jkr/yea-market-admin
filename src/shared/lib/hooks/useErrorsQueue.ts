import { ErrorsMessages } from '@/features/auth/types'
import { useEffect, useState } from 'react'
import { FieldErrors } from 'react-hook-form'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'

export interface useErrorsQueueProps {
  errors: FieldErrors<{
    password?: string
    email?: string
    firstName?: string
    phone?: string
    lastName?: string
  }>
  isError?: boolean
  error?: FetchBaseQueryError | SerializedError
}

export const useErrorsQueue = ({ errors, isError, error }: useErrorsQueueProps) => {
  const [errorsQueue, setIsErrorsQueue] = useState([])

  useEffect(() => {
    if (errors.password) {
      setIsErrorsQueue((prev) => [...prev, { message: ErrorsMessages.password }])
    }

    if (errors.email) {
      setIsErrorsQueue((prev) => [...prev, { message: ErrorsMessages.email }])
    }

    if (errors.firstName) {
      setIsErrorsQueue((prev) => [...prev, { message: ErrorsMessages.firstName }])
    }

    if (errors.firstName) {
      setIsErrorsQueue((prev) => [...prev, { message: ErrorsMessages.lastName }])
    }

    if (errors.phone) {
      setIsErrorsQueue((prev) => [...prev, { message: ErrorsMessages.phone }])
    }

    if (isError && 'status' in error) {
      const fetchError = error as FetchBaseQueryError
      if (fetchError.status === 401) {
        setIsErrorsQueue((prev) => [...prev, { message: ErrorsMessages.unauthorized }])
      }
    }
  }, [errors, isError, error])

  useEffect(() => {
    if (errorsQueue.length === 0) {
      return
    }

    const timer = setTimeout(() => {
      setIsErrorsQueue((prevQueue) => prevQueue.slice(1))
    }, 3000)

    return () => clearTimeout(timer)
  }, [errorsQueue])

  return errorsQueue
}
