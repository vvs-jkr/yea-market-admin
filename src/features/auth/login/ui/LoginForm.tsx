import React from 'react'
import styles from './styles.module.css'
import Button from '@/shared/ui/Button/Button'
import { useLoginMutation } from '@/entities/auth/api/baseApi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Alert from '@/shared/ui/Alert/Alert'
import { ILoginForm } from '../../types'
import { authValidateRules } from '@/shared/utils/validateRules'
import { useErrorsQueue } from '@/shared/lib/hooks/useErrorsQueue'

const LoginForm = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(authValidateRules)
  })

  const errorsQueue = useErrorsQueue({ errors, isError, error })

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
          if (index === 0) {
            return <Alert key={index} styles={alertStyles} type="error" title="ошибка" description={error.message} />
          }
        })}
      <div className={styles.inputsWrapper}>
        <input
          style={errors.email && { border: '1px solid #F77B7D' }}
          className={styles.input}
          type="text"
          placeholder="E-mail"
          {...register('email')}
        />
        <input
          style={errors.password && { border: '1px solid #F77B7D' }}
          className={styles.input}
          type="password"
          placeholder="Password"
          {...register('password')}
        />
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
