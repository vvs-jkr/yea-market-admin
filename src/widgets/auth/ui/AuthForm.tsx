import { LoginForm } from '@/features/auth/login'
import { RegisterForm } from '@/features/auth/register'
import { useState } from 'react'
import styles from './styles.module.css'

type FormType = 'logIn' | 'registr'

const AuthForm = () => {
  const [selectForm, setSelectForm] = useState<FormType>('logIn')
  return (
    <div>
      <div className={styles.buttonsWrapper}>
        <button onClick={() => setSelectForm('logIn')}>Log in</button>
        <button onClick={() => setSelectForm('registr')}>Regustration</button>
      </div>
      {selectForm === 'logIn' ? <LoginForm /> : <RegisterForm />}
    </div>
  )
}

export default AuthForm
