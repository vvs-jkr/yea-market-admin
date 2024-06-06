import React, { useState } from 'react'
import styles from './styles.module.css'
import Button from '@/shared/ui/Button/Button'
import { useLoginMutation } from '@/entities/auth/api/baseApi'

const LoginForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setEmail(email.trim().toLowerCase())
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value
    setPassword(password.trim())
  }

  const [login, { isLoading }] = useLoginMutation()

  const onSubmit = async () => {
    if (!email || !password) return
    await login({
      email,
      password
    })
  }

  return (
    <form className={styles.formWrapper}>
      <div className={styles.inputsWrapper}>
        <input className={styles.input} type="text" placeholder="E-mail" onChange={handleEmailChange} />
        <input className={styles.input} type="password" placeholder="Password" onChange={handlePasswordChange} />
      </div>

      <label className={styles.label}>
        <input type="checkbox" />
        Remember me
      </label>

      <div className={styles.buttonsWrapper}>
        <Button variant="light-form" label="Submit" style={{ width: '100%' }} onClick={onSubmit} disabled={isLoading} />
      </div>
      <span className={styles.description}>
        This is a website management system; to gain access you need to contact the system administrator.
      </span>
    </form>
  )
}

export default LoginForm
