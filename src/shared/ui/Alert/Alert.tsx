import Icon from '../Icon/Icon'
import Text from '../Text/Text'
import { AlertProps, alertTypes } from './alert.model'

import './alert.styles.css'

const Alert = ({ type, title, description }: AlertProps) => {
  const color = alertTypes[type].color;
  const icon = type ==='success' ? 'Checkmark'  : 'Close';
  return (
    <div className='alert-container'>
      <div className="alert-icon" style={{borderColor: color}}>
        <Icon icon={icon} color={color}/>
      </div>
      <div className="alert-info">
        <Text tagName='p' type="d-6" weight='medium' color={color}>
          {title}
        </Text>
        <Text tagName='p' type="d-3" color="#828D9E">
          {description}
        </Text>
      </div>
    </div>
  )
}

export default Alert