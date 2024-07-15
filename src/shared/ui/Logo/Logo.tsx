import { LogoProps } from './logo.model'
import logo from './assets/Logo.svg'
import styles from './styles.module.css'

const Logo = ({ onClick, ...props }: LogoProps) => {
  const SvgLogo = logo
  return <SvgLogo className={styles.logo} onClick={onClick} {...props} />
}

export default Logo
