import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '@/entities/auth/model/slice'
import Logo from '@/shared/ui/Logo/Logo'
import Icon from '@/shared/ui/Icon/Icon'
import styles from './styles.module.css'
import { useLogoutMutation } from '@/entities/auth/api/authApi'

const Header = () => {
  const dispatch = useDispatch()
  const [logoutApi] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      await logoutApi().unwrap()
      dispatch(logout())
    } catch (error) {
      console.error('Failed to logout:', error)
    }
  }

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
            <li>
              <Link to={'/'}>
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
