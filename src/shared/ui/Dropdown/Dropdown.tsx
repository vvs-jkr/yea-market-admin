import classNames from '@/shared/lib/utils/classNames'
import Option from '../Option/Option'
import Select from '../Select/Select'

import { DropdownProps } from './dropdown.model'

import './dropdown.styles.css'

const Dropdown = ({ data, isOpen, setIsOpen, selectedItem, selectItem, className }: DropdownProps) => {
  return (
    <div className={classNames('dropdown', className)}>
      <Select selectedItem={selectedItem} isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && (
        <ul className="dropdown-list">
          {data.map((option, idx) => (
            <Option key={idx} value={option} isActive={selectedItem === option} selectItem={selectItem} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
