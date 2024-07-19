import { SideBar } from '@/widgets/sidebar'
import styles from './styles.module.css'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <article className={styles.pages}>
        <Outlet />
      </article>
    </div>
  )
}

export default Main
