import Popup from '@/shared/ui/Popup/Popup';
import Icon from '@/shared/ui/Icon/Icon';

import SettingProductPopumItem from '../SettingProductPopupItem/SettingProductPopumItem';

import { SettingProductPopupProps } from './settingProductPopup.model';

import * as styles from './styles.module.css';

const SettingProductPopup = ({isCompleted}: SettingProductPopupProps) => {
  return (
    <Popup renderElement={(setIsOpenPopup) => {
      return (
        <Icon icon="DottedMenu" color={isCompleted ? '#7F8DA0' : '#DDDFE3'} onClick={(e) => {
          e.stopPropagation();
          setIsOpenPopup(true)
        }}/>
      )
    }}>
      <ul className={styles.list}>
        <SettingProductPopumItem icon="ClickableArea" label="Edit"/>
        <SettingProductPopumItem icon="Print" label="Print Receipt"/>
        <SettingProductPopumItem icon="HardDrive" label="Archive" isActive/>
        <SettingProductPopumItem icon="Trash" label="Delete"/>
      </ul>
    </Popup>
  )
}

export default SettingProductPopup