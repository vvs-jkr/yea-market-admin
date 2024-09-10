import styles from './styles.module.css'
import Button from '@/shared/ui/Button/Button'
import { useLoginMutation } from '@/entities/auth/api/authApi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ILoginForm } from '../../types'
import { authValidateRules } from '@/shared/utils/validateRules'
import { useAppDispatch } from '@/app/appStore'
import { useEffect } from 'react'
import { pushErrors } from '@/entities/auth/model/slice'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(authValidateRules)
  })

  const onSubmitHandler = async (data: ILoginForm) => {
    await login(data)
    reset()
    navigate('/');
  }

  useEffect(() => {
    dispatch(pushErrors(errors))
  }, [errors, dispatch])

  return (
    <form className={styles.formWrapper}>
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
        <Button label="Submit" style={{ width: '100%' }} disabled={isLoading} onClick={handleSubmit(onSubmitHandler)} />
      </div>
      <span className={styles.description}>
        This is a website management system; to gain access you need to contact the system administrator.
      </span>
    </form>
  )
}

export default LoginForm
