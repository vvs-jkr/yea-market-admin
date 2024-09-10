import React, { useState } from 'react'

import { InputProps } from './Input.model'

import './input.styles.css'
import classNames from '@/shared/lib/utils/classNames'
import Icon from '../Icon/Icon'

const Input: React.FC<InputProps> = ({
  type = 'text',
  disabled = false,
  size = 'S',
  focus,
  error = false,
  label,
  iconLeft = null,
  iconRight = null,
  className,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState('')

  const inputClasses = classNames(
    'input',
    {
      input__simple: type === 'simple',
      input__dropdown: type === 'dropdown',
      input__freeTextWithoutScroll: type === 'freeTextWithoutScroll',
      input__freeTextWithScroll: type === 'freeTextWithScroll',
      input_disabled: disabled,
      input_error: error
    },
    `inputSize_${size}`,
    className
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div className="inputWrapper">
      {Boolean(iconLeft) && <Icon icon="Search" />}

      <input
        className={inputClasses}
        type={type}
        placeholder={props.placeholder}
        value={inputValue}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      {Boolean(iconRight) && <Icon icon="ChevronDown" />}
    </div>
  )
}

export default Input
