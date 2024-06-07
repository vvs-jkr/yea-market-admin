import React from 'react'
import styles from './styles.module.css'
import Button from '@/shared/ui/Button/Button'
import { useLoginMutation } from '@/entities/auth/api/baseApi'
import { useForm } from 'react-hook-form'
import { validateRules } from '@/shared/utils/validateForm'
import { yupResolver } from '@hookform/resolvers/yup'

export interface ILoginForm {
  email: string
  password: string
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validateRules)
  })

  const [login, { isLoading }] = useLoginMutation()

  const onSubmitHandler = (data: ILoginForm) => {
    console.log({ data })
    reset()
  }

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={styles.inputsWrapper}>
        <input className={styles.input} type="text" placeholder="E-mail" {...register('email')} />
        <p>{errors.email?.message}</p>
        <input className={styles.input} type="password" placeholder="Password" {...register('password')} />
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
