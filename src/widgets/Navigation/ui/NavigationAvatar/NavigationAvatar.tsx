import { NavigationAvatarProps } from './navigationAvatar.model';

import * as styles from './styles.module.css'

const NavigationAvatar = ({src}: NavigationAvatarProps) => {
  return (
    <div className={styles.wrapper}>
      {src ? <img className={styles.img} src={src} /> : null}
    </div>
  )
}

export default NavigationAvatar