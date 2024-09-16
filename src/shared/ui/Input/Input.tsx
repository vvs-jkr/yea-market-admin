import React from 'react'

import { InputProps } from './Input.model'

import './input.styles.css'
import classNames from '@/shared/lib/utils/classNames'
import Icon from '../Icon/Icon'

const Input: React.FC<InputProps> = ({
  type,
  disabled,
  size,
  autofocus,
  hasError,
  label,
  iconLeft,
  iconRight,
  className,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = React.useState('')
  const inputRef = React.useRef<HTMLInputElement>(null)

  const wrapperClasses = classNames('inputWrapper', {
    inputWrapper_error: hasError,
    inputWrapper_disabled: disabled
  })

  const inputClasses = classNames('input', `inputSize_${size}`, className)

  React.useEffect(() => {
    if (autofocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autofocus])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div className={wrapperClasses}>
      {Boolean(iconLeft) && <Icon icon="Search" className="input__icon input__icon-left" />}

      <input
        ref={inputRef}
        className={inputClasses}
        type={type}
        placeholder={props.placeholder}
        value={inputValue}
        disabled={disabled}
        onChange={handleInputChange}
        {...props}
      />

      {Boolean(iconRight) && <Icon icon="ChevronDown" className="input__icon input__icon-right" />}
    </div>
  )
}

export default Input
