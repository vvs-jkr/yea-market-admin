import { IconProps } from '../Icon/icon.model'

export interface MenuItemProps {
  index: number
  icon: IconProps['icon']
  text: string
  path: string
  isActive: boolean
  onClick: (index: number) => void
}
