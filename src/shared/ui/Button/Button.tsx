import React from 'react'

import { ButtonProps } from './button.model'

import './button.styles.css'
import classNames from '@/shared/lib/utils/classNames'

const Button = ({
  variant = 'primary',
  label,
  iconLeft = null,
  iconRight = null,
  className = '',
  destructive = false,
  size = 'M',
  disabled = false,
  ...props
}: ButtonProps) => {
  const btnClasses = classNames(
    'btn',
    {
      [`btn__${variant}_destructive`]: destructive && !disabled,
      [`btn__${variant}`]: !destructive && !disabled,
      [`btn__${variant}_disabled`]: disabled && !destructive,
      [`btn__${variant}_destructive_disabled`]: destructive && disabled
    },
    `btnSize_${size}`,
    className
  )

  return (
    <button disabled={disabled} type="button" className={btnClasses} {...props}>
      {Boolean(iconLeft) && iconLeft}
      {label}
      {Boolean(iconRight) && iconRight}
    </button>
  )
}

export default Button
