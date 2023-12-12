import { useRef, useEffect } from "react"

/**
 * `usePrevious` is a custom hook for obtaining the previous value.
 *
 * @see Docs https://yamada-ui.com/hooks/use-previous
 */
export const usePrevious = <T>(value: T) => {
  const ref = useRef<T | undefined>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current as T
}
