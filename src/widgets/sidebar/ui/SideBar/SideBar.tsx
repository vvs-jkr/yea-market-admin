import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import Icon from '@/shared/ui/Icon/Icon'
import classNames from '@/shared/lib/utils/classNames'

const SideBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(0)

  const handleItemClick = (index: number): void => {
    setActiveItem(index)
  }

  return (
    <aside className={styles.aside}>
      <div className={styles.user}>
        <img className={styles.image} />
        <h3 className={styles.role}>Admin</h3>
        <p className={styles.mail}>user@mail.ru</p>
      </div>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          <li
            onClick={() => handleItemClick(0)}
            className={classNames(styles.item, { [styles.active]: activeItem === 0 })}>
            <Link to={'/'}>
              <div className={styles.linkContent}>
                <Icon icon="Trending" />
                <span className={styles.text}>Orders</span>
              </div>
            </Link>
          </li>
          <li
            onClick={() => handleItemClick(1)}
            className={classNames(styles.item, { [styles.active]: activeItem === 1 })}>
            <Link to={'/'}>
              <div className={styles.linkContent}>
                <Icon icon="Box" />
                <span className={styles.text}>Products</span>
              </div>
            </Link>
          </li>
          <li
            onClick={() => handleItemClick(2)}
            className={classNames(styles.item, { [styles.active]: activeItem === 2 })}>
            <Link to={'/'}>
              <div className={styles.linkContent}>
                <Icon icon="Contacts" />
                <span className={styles.text}>Clients</span>
              </div>
            </Link>
          </li>
          <li
            onClick={() => handleItemClick(3)}
            className={classNames(styles.item, { [styles.active]: activeItem === 3 })}>
            <Link to={'/'}>
              <div className={styles.linkContent}>
                <Icon icon="Settings" />
                <span className={styles.text}>Settings</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
