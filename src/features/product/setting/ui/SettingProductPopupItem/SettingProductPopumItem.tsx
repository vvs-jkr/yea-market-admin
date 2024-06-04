import Icon from '@/shared/ui/Icon/Icon'
import Text from '@/shared/ui/Text/Text'

import { SettingProductPopumItemProps } from './settingProductPopupItem.model'

import * as styles from './styles.module.css'

const SettingProductPopumItem = ({icon, label, isActive}: SettingProductPopumItemProps) => {
  const activeColor = isActive ? '#FFF':'#353E5C'
  return (
    <li className={`${isActive ? styles.active : ''} ${styles.item}`}>
      <Icon icon={icon} color={activeColor} />
      <Text tagName='span' type='d-3' weight='medium' color={activeColor}>{label}</Text>
    </li>
  )
}

export default SettingProductPopumItem