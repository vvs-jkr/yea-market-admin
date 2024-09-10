import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import Icon from '@/shared/ui/Icon/Icon'
import classNames from '@/shared/lib/utils/classNames'
import { MenuItemProps } from './menuItem.model'

const MenuItem = ({ index, icon, text, path, isActive, onClick }: MenuItemProps) => {
  return (
    <li onClick={() => onClick(index)} className={classNames(styles.item, { [styles.active]: isActive })}>
      <Link to={path}>
        <div className={styles.linkContent}>
          <Icon icon={icon} />
          <span className={styles.text}>{text}</span>
        </div>
      </Link>
    </li>
  )
}

export default MenuItem
