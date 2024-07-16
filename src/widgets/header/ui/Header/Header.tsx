import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '@/entities/auth/model/slice'
import Logo from '@/shared/ui/Logo/Logo'
import Icon from '@/shared/ui/Icon/Icon'
import styles from './styles.module.css'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    dispatch(logout())
    localStorage.removeItem('market-accessToken')
    navigate('/auth')
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
            <li className={styles.item}>
              <Icon icon="Logout" onClick={handleLogout} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
