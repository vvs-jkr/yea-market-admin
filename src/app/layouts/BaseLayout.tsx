import { Outlet } from 'react-router-dom'
import '@/app/styles/App.css'
import styles from './styles/BaseLayout.module.css'

export default function BaseLayout() {
  return (
    <div>
      <h1 className={styles.title}>Base layout</h1>
      <Outlet />
    </div>
  )
}
