import Icon from '../Icon/Icon'
import Text from '../Text/Text'

import { SelectProps } from './select.module'

import './select.styles.css'

export default function Select({ selectedItem, isOpen, setIsOpen }: SelectProps) {
  return (
    <button className="select" onClick={() => setIsOpen(!isOpen)}>
      <Text tagName='p' type="d-3">{selectedItem}</Text>
      <Icon icon="ChevronDown" />
    </button>
  )
}
