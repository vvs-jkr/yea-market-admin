import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Button from '@/shared/ui/Button/Button'
import { useLoginMutation } from '@/entities/auth/api/baseApi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Alert from '@/shared/ui/Alert/Alert'
import { ErrorsMessages, ILoginForm } from '../../types'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { authValidateRules } from '@/shared/utils/validateRules'

const LoginForm = () => {
  const [errorsQueue, setIsErrorsQueue] = useState([])
  const [login, { isLoading, isError, error }] = useLoginMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(authValidateRules)
  })

  useEffect(() => {
    if (errors.password) {
      setIsErrorsQueue((prev) => [...prev, { message: ErrorsMessages.password }])
    }

    if (errors.email) {
      setIsErrorsQueue((prev) => [...prev, { message: ErrorsMessages.email }])
    }

    if (isError && 'status' in error) {
      const fetchError = error as FetchBaseQueryError
      if (fetchError.status === 401) {
        setIsErrorsQueue((prev) => [...prev, { message: ErrorsMessages.unauthorized }])
      }
    }
  }, [errors, error, isError])

  useEffect(() => {
    if (errorsQueue.length === 0) {
      return
    }

    const timer = setTimeout(() => {
      setIsErrorsQueue((prevQueue) => {
        const newQueue = [...prevQueue]
        newQueue.pop()
        return newQueue
      })
    }, 3000)

    return () => clearTimeout(timer)
  }, [errorsQueue])

  const onSubmitHandler = async (data: ILoginForm) => {
    await login(data)
    reset()
  }

  const alertStyles = {
    width: '468px',
    position: 'absolute' as 'relative',
    overflow: 'hidden',
    top: '50px',
    right: '25px'
  }

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmitHandler)}>
      {errorsQueue &&
        errorsQueue.map((error, index) => {
          return <Alert key={index} styles={alertStyles} type="error" title="ошибка" description={error.message} />
        })}
      <div className={styles.inputsWrapper}>
        <input
          style={errors.email && { border: '1px solid #F77B7D' }}
          className={styles.input}
          type="text"
          placeholder="E-mail"
          {...register('email')}
        />
        <p>{errors.email?.message}</p>
        <input
          style={errors.password && { border: '1px solid #F77B7D' }}
          className={styles.input}
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <p>{errors.password?.message}</p>
      </div>

      <label className={styles.label}>
        <input type="checkbox" />
        Remember me
      </label>

      <div className={styles.buttonsWrapper}>
        <Button variant="light-form" label="Submit" type="submit" style={{ width: '100%' }} disabled={isLoading} />
      </div>
      <span className={styles.description}>
        This is a website management system; to gain access you need to contact the system administrator.
      </span>
    </form>
  )
}

export default LoginForm
