import { LogoutProps } from './logout.model'
import logout from './assets/Logout.svg'
import styles from './styles.module.css'

const Logout = ({ onClick, ...props }: LogoutProps) => {
  const SvgLogout = logout
  return <SvgLogout className={styles.logout} onClick={onClick} {...props} />
}

export default Logout
