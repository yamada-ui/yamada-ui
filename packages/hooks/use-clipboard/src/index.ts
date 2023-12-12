import { isNumber, isString } from "@yamada-ui/utils"
import copy from "copy-to-clipboard"
import { useState, useCallback, useEffect } from "react"

export type UseClipboardOptions = {
  timeout?: number
  format?: string
}

export const useClipboard = (
  defaultValue: string = "",
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
    let timeoutId: number | null = null

    if (hasCopied)
      timeoutId = window.setTimeout(() => {
        setHasCopied(false)
      }, timeout)

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [timeout, hasCopied])

  return {
    value,
    setValue,
    onCopy,
    hasCopied,
  }
}
