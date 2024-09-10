import React from 'react'

export type InputVariantTypes = 'text'

export type InputSize = 'S' | 'L'

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: string
  variant?: InputVariantTypes
  className?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  size?: InputSize
  destructive?: boolean
  disabled?: boolean
  focus?: string
  error?: boolean
  label?: string
  placeholder?: string
}
