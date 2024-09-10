import { useAppDispatch, useAppSelector } from '@/app/appStore'
import { deleteError } from '@/entities/auth'
import { errorsMessages } from '@/shared/constants/errorMessages'
import Alert from '@/shared/ui/Alert/Alert'
import { useEffect, useState } from 'react'
import styles from './styles.module.css'

type ErrorType = {
  name: string
  description: string
}

const LayoutAlert = () => {
  const [error, setError] = useState<ErrorType | null>(null)
  const dispatch = useAppDispatch()
  const errors = useAppSelector((state) => state.auth.errors)

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        dispatch(deleteError())
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [errors, dispatch])

  useEffect(() => {
    const firstError = errors[0]
    const newError = {
      name: firstError,
      description: errorsMessages[firstError]
    }
    setError(newError)
  }, [errors])

  return (
    <>
      {errors.length > 0 ? (
        <Alert
          customClassName={styles.alertStyles}
          type="error"
          title={`ошибка ${error.name}`}
          description={error.description}
        />
      ) : null}
    </>
  )
}

export default LayoutAlert
