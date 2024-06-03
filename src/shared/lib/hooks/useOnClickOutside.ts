import { useEffect } from 'react'

type EventType = MouseEvent | TouchEvent

const useOnClickOutside = (ref: React.RefObject<HTMLDivElement>, handler: () => void) => {
  useEffect(() => {
    const listener = (event: EventType) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler()
      }
      return
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
