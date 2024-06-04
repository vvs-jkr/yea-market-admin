import { ReactElement, ReactNode } from "react"

export interface PopupProps {
  renderElement: (setIsOpenPopup: (arg0: boolean) => void) => ReactElement
  children: ReactNode
}