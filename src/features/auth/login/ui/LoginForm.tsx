import React, { useState } from 'react'
import styles from './styles.module.css'
import Button from '@/shared/ui/Button/Button'
import { useLoginMutation } from '@/entities/auth/api/authApi'

const LoginForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [login] = useLoginMutation()

  const onSubmit = async () => {
    if (!email || !password) return
    await login({
      email: email.trim().toLowerCase(),
      password: password.trim()
    })
  }

  return (
    <form className={styles.formWrapper}>
      <div className={styles.inputsWrapper}>
        <input className={styles.input} type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <label className={styles.label}>
        <input type="checkbox" />
        Remember me
      </label>

      <div className={styles.buttonsWrapper}>
        <Button variant="light-form" label="Submit" style={{ width: '100%' }} onClick={() => onSubmit()} />
      </div>
      <span className={styles.description}>
        This is a website management system; to gain access you need to contact the system administrator.
      </span>
    </form>
  )
}

export default LoginForm
