import { useState } from 'react'
import styles from './styles.module.css'
import { IconType } from '@/shared/ui/Icon/icon.model'
import { useHandleLogout } from '@/shared/utils/logoutUtil'
import MenuItem from '@/shared/ui/MenuItem/MenuItem'
import { Link } from 'react-router-dom'
import Icon from '@/shared/ui/Icon/Icon'

type MenuItemType = {
  icon: IconType
  text: string
  path: string
}

const menuItems: MenuItemType[] = [
  { icon: 'Trending', text: 'Orders', path: '/' },
  { icon: 'Box', text: 'Products', path: '/' },
  { icon: 'Contacts', text: 'Clients', path: '/' },
  { icon: 'Settings', text: 'Settings', path: '/' }
]

const SideBar = () => {
  const [activeItem, setActiveItem] = useState<number | null>(0)
  const handleLogout = useHandleLogout()

  const handleItemClick = (index: number): void => {
    setActiveItem(index)
    if (menuItems[index].text === 'Logout') {
      handleLogout()
    }
  }

  return (
    <aside className={styles.aside}>
      <div className={styles.user}>
        <img className={styles.image} />
        <h3 className={styles.role}>Admin</h3>
        <p className={styles.mail}>user@mail.ru</p>
        <hr className={styles.line} />
      </div>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              index={index}
              icon={item.icon}
              text={item.text}
              path={item.path}
              isActive={activeItem === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </ul>
      </nav>
      <div className={styles.logout}>
        <Link to={'/auth'}>
          <div className={styles.linkContent}>
            <Icon icon="Logout" />
            <span className={styles.text}>Logout</span>
          </div>
        </Link>
      </div>
    </aside>
  )
}

export default SideBar
