import { GoToSiteProps } from './goToSite.model'
import goToSite from './assets/GoToSite.svg'
import styles from './styles.module.css'

const GoToSite = ({ onClick, ...props }: GoToSiteProps) => {
  const SvgGoToSite = goToSite
  return <SvgGoToSite className={styles.logout} onClick={onClick} {...props} />
}

export default GoToSite
