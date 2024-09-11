import { Link } from 'react-router-dom'
import Logo from '@/shared/ui/Logo/Logo'
import Icon from '@/shared/ui/Icon/Icon'
import styles from './styles.module.css'
import { LogoutButton } from '@/features/auth/logout'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.info}>
          <Link to={'/'}>
            <Logo />
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to={'/'}>
                <Icon icon="GoToSite" />
              </Link>
            </li>
            <li>
              <LogoutButton className={styles.logout} short />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
