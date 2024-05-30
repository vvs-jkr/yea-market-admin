export interface AlertProps {
  type: 'error' | 'success'
  title: string
  description: string
}

export const alertTypes = {
  error: {
    color: '#F22C2C',
  },
  success: {
    color: '#20B54A',
  }
}