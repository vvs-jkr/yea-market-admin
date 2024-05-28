import React from 'react'
import icons from './assets/index'
import { IconProps } from './icon.model'

const Icon: React.FC<IconProps> = ({
  icon,
  size = '20',
  color,
  preserveAspectRatio = 'xMidYMid meet',
  viewBox = '0 0 20 20',
  ...props
}) => {
  const SvgIcon = icons[icon]
  return (
    <SvgIcon
      height={size}
      width={size}
      color={color}
      preserveAspectRatio={preserveAspectRatio}
      viewBox={viewBox}
      {...props}
    />
  )
}

export default Icon
