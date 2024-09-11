import React from 'react'

import { InputProps } from './Input.model'

import './input.styles.css'
import classNames from '@/shared/lib/utils/classNames'
import Icon from '../Icon/Icon'

const Input: React.FC<InputProps> = ({
  type,
  disabled,
  size,
  focus,
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

  const inputClasses = classNames(
    'input',
    {
      input__simple: type === 'simple',
      input__dropdown: type === 'dropdown',
      input__freeTextWithoutScroll: type === 'freeTextWithoutScroll',
      input__freeTextWithScroll: type === 'freeTextWithScroll',
      input_disabled: disabled,
      input_error: hasError
    },
    `inputSize_${size}`,
    className
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  React.useEffect(() => {
    if (focus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [focus])

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
        onChange={handleChange}
        {...props}
      />

      {Boolean(iconRight) && <Icon icon="ChevronDown" className="input__icon input__icon-right" />}
    </div>
  )
}

export default Input
