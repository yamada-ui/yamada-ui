import { useState, useCallback, ElementType } from 'react'

export const useButtonType = (value?: ElementType) => {
  const [isButton, setIsButton] = useState(!value)

  const ref = useCallback((node: HTMLElement | null) => {
    if (node) setIsButton(node.tagName === 'BUTTON')
  }, [])

  const type = isButton ? 'button' : undefined

  return { ref, type } as const
}
