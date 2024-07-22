import { SideBar } from '@/widgets/sidebar'
import styles from './styles.module.css'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

const Main = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.pages}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default Main
