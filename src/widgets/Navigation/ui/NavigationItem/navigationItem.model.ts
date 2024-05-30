import { IconType } from '@/shared/ui/Icon/icon.model'

export interface NavigationItemProps {
  icon: IconType
  link?: string
  isActive?: boolean
  label?: string
  notification?: number
}