import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Button from '@/shared/ui/Button/Button'
import { useRegisterationMutation } from '@/entities/auth/api/baseApi'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IUser } from '@/entities/auth/model/types'
import { registerValidateRules } from '@/shared/utils/validateRules'
import { ErrorsMessages } from '../../types'
import Alert from '@/shared/ui/Alert/Alert'

const RegisterForm = () => {
  const [errorsQueue, setIsErrorsQueue] = useState([])
  const [registration, { isLoading }] = useRegisterationMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(registerValidateRules)
  })

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
  }, [errors])

  useEffect(() => {
    if (errorsQueue.length === 0) {
      return
    }

    const timer = setTimeout(() => {
      setIsErrorsQueue((prevQueue) => prevQueue.slice(1))
    }, 3000)

    return () => clearTimeout(timer)
  }, [errorsQueue])

  const onSubmitHandler = async (data: IUser) => {
    await registration(data)
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
          if (index === 0) {
            return <Alert key={index} styles={alertStyles} type="error" title="ошибка" description={error.message} />
          }
        })}
      <div className={styles.inputsWrapper}>
        <input
          style={errors.firstName && { border: '1px solid #F77B7D' }}
          className={styles.input}
          type="text"
          placeholder="FirstName"
          {...register('firstName')}
        />
        <input
          style={errors.lastName && { border: '1px solid #F77B7D' }}
          className={styles.input}
          type="text"
          placeholder="LastName"
          {...register('lastName')}
        />
        <input
          style={errors.email && { border: '1px solid #F77B7D' }}
          className={styles.input}
          type="text"
          placeholder="E-mail"
          {...register('email')}
        />
        <input
          style={errors.phone && { border: '1px solid #F77B7D' }}
          className={styles.input}
          type="text"
          placeholder="Phone"
          {...register('phone')}
        />
        <input
          style={errors.password && { border: '1px solid #F77B7D' }}
          className={styles.input}
          type="text"
          placeholder="Password"
          {...register('password')}
        />
      </div>

      <label className={styles.label}>
        <input type="checkbox" />
        Remember me
      </label>

      <div className={styles.buttonsWrapper}>
        <Button variant="light-form" label="Submit" style={{ width: '100%' }} type="submit" disabled={isLoading} />
      </div>
      <span className={styles.description}>
        This is a website management system; to gain access you need to contact the system administrator.
      </span>
    </form>
  )
}

export default RegisterForm
