import React from "react"

export interface DropdownProps extends React.ComponentProps<'div'> {
  data: string[]
  isOpen: boolean
  selectedItem: string
  setIsOpen: (isOpen: boolean) => void
  selectItem: (item: string) => void
}
