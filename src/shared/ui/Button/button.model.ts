import React from 'react'

export type ButtonVariantTypes = 'light' | 'dark' | 'light-outline' | 'dark-outline'

export interface ButtonProps extends React.ComponentProps<'button'> {
  label?: string
  variant: ButtonVariantTypes
  className?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}
