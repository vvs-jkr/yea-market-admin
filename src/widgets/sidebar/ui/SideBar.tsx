import { useState } from 'react'
import styles from './styles.module.css'
import { IconType } from '@/shared/ui/Icon/icon.model'
import MenuItem from '@/shared/ui/MenuItem/MenuItem'
import { LogoutButton } from '@/features/auth/logout'

type MenuItemType = {
  icon: IconType
  text: string
  path: string
}

const menuItems: MenuItemType[] = [
  { icon: 'Trending', text: 'Orders', path: '/orders' },
  { icon: 'Box', text: 'Products', path: '/products' },
  { icon: 'Contacts', text: 'Clients', path: '/clients' },
  { icon: 'Settings', text: 'Settings', path: '/settings' }
]

const SideBar = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  const handleItemClick = (index: number): void => {
    setActiveItem(index)
  }

  return (
    <aside className={styles.aside}>
      <div className={styles.user}>
        <img className={styles.image} />
        <h3 className={styles.role}>Admin</h3>
        <p className={styles.mail}>user@mail.ru</p>
        <div className={styles.line} />
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
        <div className={styles.line} />
      </nav>
      <LogoutButton className={styles.logout} short={false} />
    </aside>
  )
}

export default SideBar
