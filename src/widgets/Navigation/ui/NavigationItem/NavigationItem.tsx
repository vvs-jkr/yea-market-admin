import { NavLink } from "react-router-dom"

import Icon from "@/shared/ui/Icon/Icon"
import Text from "@/shared/ui/Text/Text"

import { NavigationItemProps } from "./navigationItem.model"

import * as styles from './styles.module.css'

const NavigationItem = ({ link, icon, isActive, label }: NavigationItemProps) => {
  const activeColor = isActive? '#FFF':'#595666'
  return (
    <NavLink to={link} className={isActive ? `${styles.active} ${styles.link}` : styles.link}>
      <Icon icon={icon} color={activeColor} />
      <Text tagName='span' type='d-3' weight='medium' color={activeColor}>{label}</Text>
    </NavLink>
)
}

export default NavigationItem