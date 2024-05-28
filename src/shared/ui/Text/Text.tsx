import React from 'react'

import classNames from '@/shared/lib/utils/classNames'
import { TextProps } from './text.model'

import './text.styles.css'

const Text: React.FC<TextProps> = ({ tagName, type, weight = 'regular', children, className, ...props }: TextProps) => {
  return React.createElement(
    tagName,
    { className: classNames(`${type}`, `${weight}`, className), ...props },
    children
  )
}

export default Text
