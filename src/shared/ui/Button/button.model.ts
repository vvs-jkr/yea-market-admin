import React from 'react'

export type ButtonVariantTypes = 'primary' | 'secondary' | 'outline' | 'tertiary' | 'link'

export type ButtonSize = 'M' | 'L'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string
  variant?: ButtonVariantTypes
  className?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  size?: ButtonSize
  destructive?: boolean
  disabled?: boolean
}
