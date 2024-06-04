import React, { useState } from 'react'
import styles from './styles.module.css'
import Button from '@/shared/ui/Button/Button'
import { useRegistrMutation } from '@/entities/auth/api/authApi'

const RegisterForm = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [register] = useRegistrMutation()

  const onRegister = async () => {
    if (!email || !password) return
    await register({
      firstName: firstName.trim().toLowerCase(),
      lastName: lastName.trim().toLowerCase(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      password: password.trim()
    })
  }

  return (
    <form className={styles.formWrapper}>
      <div className={styles.inputsWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="FirstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="LastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input className={styles.input} type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <input className={styles.input} type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
        <input
          className={styles.input}
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <label className={styles.label}>
        <input type="checkbox" />
        Remember me
      </label>

      <div className={styles.buttonsWrapper}>
        <Button variant="light-form" label="Submit" style={{ width: '100%' }} onClick={() => onRegister()} />
      </div>
      <span className={styles.description}>
        This is a website management system; to gain access you need to contact the system administrator.
      </span>
    </form>
  )
}

export default RegisterForm
