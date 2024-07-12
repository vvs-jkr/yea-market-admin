import Logo from '@/shared/ui/Logo/Logo'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import Logout from '@/shared/ui/Logout/Logout'
import GoToSite from '@/shared/ui/GoToSite/GoToSite'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <Link to={'/'}>
          <Logo />
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link to={'/'}>
              <Logout />
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <GoToSite />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
