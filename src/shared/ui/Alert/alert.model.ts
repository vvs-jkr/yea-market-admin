import React from 'react'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'error' | 'success'
  title: string
  description: string
  styles: {
    [key: string]: string
  }
}

export const alertTypes = {
  error: {
    color: '#F22C2C'
  },
  success: {
    color: '#20B54A'
  }
}
