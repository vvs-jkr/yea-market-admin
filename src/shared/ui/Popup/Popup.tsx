import React, { useRef } from 'react'

import { useToggle } from '@/shared/lib/hooks/useToggle';
import useOnClickOutside from '@/shared/lib/hooks/useOnClickOutside';

import { PopupProps } from './popup.model';

import './popup.styles.css'

const Popup = ({renderElement, children}: PopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [isOpenPopup, , setIsOpenPopup] = useToggle(false);

  useOnClickOutside(popupRef, () => setIsOpenPopup(false));

  return (
    <div className="popup-container">
      {renderElement(setIsOpenPopup)}

      {
        isOpenPopup && <div ref={popupRef} className="popup-content">{children}</div>
      }
    </div>
  )
}

export default Popup