import React from 'react'

import { InputProps } from './Input.model'

import './input.styles.css'
import classNames from '@/shared/lib/utils/classNames'
import Icon from '../Icon/Icon'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, disabled, size, autofocus, hasError, label, iconLeft, iconRight, className, ...props }, ref) => {
   //  const [inputValue, setInputValue] = React.useState('')

    const wrapperClasses = classNames('inputWrapper', {
      inputWrapper_error: hasError,
      inputWrapper_disabled: disabled
    })

    const inputClasses = classNames('input', `inputSize_${size}`, className)

    React.useEffect(() => {
      if (autofocus && ref && (ref as React.RefObject<HTMLInputElement>).current) {
        ;(ref as React.RefObject<HTMLInputElement>).current?.focus()
      }
    }, [autofocus, ref])

   //  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   //    setInputValue(event.target.value)
   //  }

    return (
      <div className={wrapperClasses}>
        {Boolean(iconLeft) && <Icon icon="Search" className="input__icon input__icon-left" />}

        <input
          ref={ref}
          className={inputClasses}
          type={type}
          placeholder={props.placeholder}
         //  value={inputValue}
          disabled={disabled}
         //  onChange={handleInputChange}
          {...props}
        />

        {Boolean(iconRight) && <Icon icon="ChevronDown" className="input__icon input__icon-right" />}
      </div>
    )
  }
)

export default Input
