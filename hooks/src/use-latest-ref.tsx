import { MutableRefObject, useRef } from 'react'

export const useLatestRef = <T extends any>(value: T) => {
  const ref = useRef<T | null>(null)

  ref.current = value

  return ref as MutableRefObject<T>
}
