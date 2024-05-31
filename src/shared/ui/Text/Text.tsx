import React from 'react'

import classNames from '@/shared/lib/utils/classNames'
import { TextProps } from './text.model'

import './text.styles.css'

const Text: React.FC<TextProps> = ({ tagName, type, weight = 'regular', color = '#1E354E', children, className, ...props }: TextProps) => {
  return React.createElement(
    tagName,
    { className: classNames(`${type}`, `${weight}`, className), style: {color: color}, ...props },
    children
  )
}

export default Text
