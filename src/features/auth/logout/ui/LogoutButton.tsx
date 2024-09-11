import Icon from '@/shared/ui/Icon/Icon'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useLogout } from '../useLogout'

type LogoutButtonProps = {
  short: boolean
  className: string
}

const LogoutButton = ({ short, className }: LogoutButtonProps) => {
  const handleLogout = useLogout()

  return (
    <div className={className}>
      <Link to={'/auth'}>
        <div className={styles.linkContent} onClick={handleLogout}>
          <Icon icon="Logout" />
          {!short && <span className={styles.text}>Logout</span>}
        </div>
      </Link>
    </div>
  )
}

export default LogoutButton
