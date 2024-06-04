import Logo from '@/shared/ui/Logo/Logo'
import styles from './styles.module.css'
import { AuthForm } from '@/widgets/auth'

const FormPage = () => {
  return (
    <div className={styles.page}>
      <Logo />
      <h1 className={styles.title}>Welcome to the Dashboard</h1>
      <AuthForm />
    </div>
  )
}

export default FormPage
