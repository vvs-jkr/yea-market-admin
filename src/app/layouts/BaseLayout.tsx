import { Outlet } from 'react-router-dom'
import '@/shared/styles/global.css'
import * as styles from './styles/BaseLayout.module.css'

export default function BaseLayout() {
  return (
    <div>
      <h1 className={styles.title}>Base layout</h1>
      <Outlet />
    </div>
  )
}
