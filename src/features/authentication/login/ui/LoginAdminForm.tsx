import React from 'react'
import styles from './styles.module.css'
import Button from '@/shared/ui/Button/Button'

const LoginAdminForm = () => {
  return (
    <form className={styles.formWrapper}>
      <span className={styles.title}>Log in</span>

      <div className={styles.inputsWrapper}>
        <input className={styles.input} type="text" placeholder="E-mail" />
        <input className={styles.input} type="password" placeholder="Password" />
      </div>

      <label className={styles.label}>
        <input type="checkbox" />
        Remember me
      </label>

      <div className={styles.buttonsWrapper}>
        <Button variant="light-form" label="Sing In" style={{ width: '100%' }} />
      </div>
      <span className={styles.description}>
        This is a website management system; to gain access you need to contact the system administrator.
      </span>
    </form>
  )
}

export default LoginAdminForm
