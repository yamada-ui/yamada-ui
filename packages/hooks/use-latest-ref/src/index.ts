import type { MutableRefObject } from "react"
import { useRef } from "react"

export const useLatestRef = <T extends any>(value: T) => {
  const ref = useRef<null | T>(null)

  ref.current = value

  return ref as MutableRefObject<T>
}
