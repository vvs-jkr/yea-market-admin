import { Outlet } from 'react-router-dom'
import '@/app/styles/App.css'
import * as styles from './styles/BaseLayout.module.css'
import Icon from '@/shared/ui/Icon/Icon'

export default function BaseLayout() {
  return (
    <div>
      <h1 className={styles.title}>Base layout</h1>
      <Icon icon="Search" color="blue" />
      <Outlet />
    </div>
  )
}
