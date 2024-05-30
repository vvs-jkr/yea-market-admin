import { Link } from "react-router-dom"

import NavigationAvatar from "../NavigationAvatar/NavigationAvatar"
import Text from "@/shared/ui/Text/Text"

import * as styles from './styles.module.css'

const NavigationUserInfo = () => {
  return (
    <div className={styles.info}>
      <NavigationAvatar />
      <Text tagName='p' type='d-4' weight="medium">Admin</Text>
      <Link to="mailto:user@mail.com" className={styles.link}>user@mail.com</Link>
    </div>
  )
}

export default NavigationUserInfo