import icons from './assets'

export type IconType = keyof typeof icons

export type IconSize = '16' | '20' | '24' | '36' | '52' | '60' | 16 | 20 | 24 | 36 | 52 | 60

export interface IconProps {
  icon: IconType
  color?: string
  size?: IconSize
  preserveAspectRatio?: string
  viewBox?: string
}
