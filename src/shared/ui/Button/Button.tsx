import React from 'react'

import { ButtonProps } from './button.model'

import './button.styles.css'

const Button = ({
  variant = 'dark-outline',
  label,
  iconLeft = null,
  iconRight = null,
  className = '',
  ...props
}: ButtonProps) => {
  const btnClasses = ['btn', `btn_${variant}`]
  if (className) {
    btnClasses.push(className)
  }

  return (
    <button type="button" className={btnClasses.join(' ')} {...props}>
      {Boolean(iconLeft) && iconLeft}
      {label}
      {Boolean(iconRight) && iconRight}
    </button>
  )
}

export default Button
