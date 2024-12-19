import copy from "copy-to-clipboard"
import { useCallback, useEffect, useState } from "react"
import { isNumber, isString } from "../../utils"

export interface UseClipboardOptions {
  format?: string
  timeout?: number
}

/**
 * `useClipboard` is a custom hook that performs the operation of copying a value to the clipboard.
 *
 * @see Docs https://yamada-ui.com/hooks/use-clipboard
 */
export const useClipboard = (
  defaultValue = "",
  timeoutOrOptions: number | UseClipboardOptions = {},
) => {
  const [hasCopied, setHasCopied] = useState(false)

  const [value, setValue] = useState(defaultValue)

  useEffect(() => setValue(defaultValue), [defaultValue])

  const { timeout = 1500, ...copyOptions } = isNumber(timeoutOrOptions)
    ? { timeout: timeoutOrOptions }
    : timeoutOrOptions

  const onCopy = useCallback(
    (newValue?: any) => {
      if (!isString(newValue)) {
        newValue = value
      } else {
        setValue(newValue)
      }

      const hasCopied = copy(newValue, copyOptions)

      setHasCopied(hasCopied)
    },
    [value, copyOptions],
  )

  useEffect(() => {
    let timeoutId: null | number = null

    if (hasCopied)
      timeoutId = window.setTimeout(() => {
        setHasCopied(false)
      }, timeout)

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [timeout, hasCopied])

  return {
    hasCopied,
    setValue,
    value,
    onCopy,
  }
}
