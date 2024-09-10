import React from 'react'

export type weightTypes = 'bold' | 'medium' | 'regular' | 'extra-bold'

export type typographyTypes =
  | 'd-12'
  | 'd-11'
  | 'd-10'
  | 'd-9'
  | 'd-8'
  | 'd-7'
  | 'd-6'
  | 'd-5'
  | 'd-4'
  | 'd-3'
  | 'd-2'
  | 'd-1'
  | 'p-lg'
  | 'p-md'
  | 'p-def'
  | 'p-sm'
  | 'h-12'
  | 'h-11'
  | 'h-10'
  | 'h-9'
  | 'h-8'
  | 'h-7'
  | 'h-6'

export interface TextProps extends React.ComponentProps<'text'> {
  type: typographyTypes
  tagName: string
  weight?: weightTypes
  color?: string
  children: React.ReactNode
}
