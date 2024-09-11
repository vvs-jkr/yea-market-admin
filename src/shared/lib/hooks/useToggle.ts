import { useState, useCallback } from 'react'

export const useToggle = (
  initialState = false
): [boolean, () => void, (arg0: boolean) => void] => {
  const [state, setState] = useState(initialState)

  const onToggle = useCallback(() => setState((state) => !state), [])

  return [state, onToggle, setState]
}
