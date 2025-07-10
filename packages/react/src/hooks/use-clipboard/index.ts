"use client"

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
 * @see https://yamada-ui.com/hooks/use-clipboard
 */
export const useClipboard = (
  defaultValue = "",
  timeoutOrOptions: number | UseClipboardOptions = {},
) => {
  const [copied, setCopied] = useState(false)

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

      const copied = copy(newValue, copyOptions)

      setCopied(copied)
    },
    [value, copyOptions],
  )

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    if (copied)
      timeoutId = setTimeout(() => {
        setCopied(false)
      }, timeout)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [timeout, copied])

  return {
    copied,
    setValue,
    value,
    onCopy,
  }
}
