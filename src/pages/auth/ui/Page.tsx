import Logo from '@/shared/ui/Logo/Logo'
import styles from './styles.module.css'
import { LoginForm } from '@/features/auth/login'

const AuthPage = () => {
  return (
    <div className={styles.page}>
      <Logo />
      <h1 className={styles.title}>Welcome to the Dashboard</h1>
      <span className={styles.description}>Log in</span>
      <LoginForm />
    </div>
  )
}

export default AuthPage
