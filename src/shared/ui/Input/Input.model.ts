import React from 'react'

export type InputSize = 'S' | 'L'

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: string
  variant?: 'simple' | 'dropdown' | 'freeTextWithoutScroll' | 'freeTextWithScroll'
  className?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  size?: InputSize
  destructive?: boolean
  disabled?: boolean
  focus?: boolean
  hasError?: boolean
  label?: string
  placeholder?: string
}
