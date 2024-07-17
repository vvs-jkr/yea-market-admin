import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '@/shared/ui/Logo/Logo'
import Icon from '@/shared/ui/Icon/Icon'
import styles from './styles.module.css'
import { useHandleLogout } from '@/shared/utils/logoutUtil'

const Header = () => {
  const handleLogout = useHandleLogout()

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
            <li>
              <Link to={'/'}>
                <Icon icon="GoToSite" />
              </Link>
            </li>
            <li className={styles.item}>
              <Link to={'/auth'}>
                <Icon icon="Logout" onClick={handleLogout} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
