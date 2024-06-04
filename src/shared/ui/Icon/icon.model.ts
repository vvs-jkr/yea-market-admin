import React from 'react'
import icons from './assets'

export type IconType = keyof typeof icons

export type IconSize = '8' | '16' | '20' | '24' | '36' | '52' | '60' | 8 | 16 | 20 | 24 | 36 | 52 | 60

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconType
  color?: string
  size?: IconSize
  preserveAspectRatio?: string
  viewBox?: string
}
