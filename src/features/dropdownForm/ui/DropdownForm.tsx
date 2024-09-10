import { useRef, useState } from 'react'

import Dropdown from '@/shared/ui/Dropdown/Dropdown'
import useOnClickOutside from '@/shared/lib/hooks/useOnClickOutside'

import { DropdownFromProps } from './dropdownForm.model'

const DropdownForm = ({ data = ['Order ID', 'Item', 'Date', 'Pricing', 'Status'], initialValue = '', className }: DropdownFromProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(initialValue)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const closeTheDropdown = () => setIsOpen(false)

  const selectItem = (item: string) => {
    setSelectedItem(item)
    setIsOpen(false)
  }

  useOnClickOutside(dropdownRef, closeTheDropdown)

  return (
    <div ref={dropdownRef}>
      <Dropdown className={className} data={data} isOpen={isOpen} setIsOpen={setIsOpen} selectedItem={selectedItem} selectItem={selectItem} />
    </div>
  )
}

export default DropdownForm
