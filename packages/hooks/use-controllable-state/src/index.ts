import { useCallbackRef, runIfFunc } from "@yamada-ui/utils"
import type { Dispatch, SetStateAction } from "react"
import { useState } from "react"

export type UseControllableStateProps<T> = {
  value?: T
  defaultValue?: T | (() => T)
  onChange?: (value: T) => void
  onUpdate?: (prev: T, next: T) => boolean
}

export const useControllableState = <T>({
  value,
  ...rest
}: UseControllableStateProps<T>) => {
  rest.onUpdate ??= (prev, next) => prev !== next

  const onChange = useCallbackRef(rest.onChange)
  const onUpdate = useCallbackRef(rest.onUpdate)

  const [defaultValue, setDefaultValue] = useState(rest.defaultValue as T)
  const controlled = value !== undefined
  const resolvedValue = controlled ? value : defaultValue

  const setValue = useCallbackRef(
    (next: SetStateAction<T>) => {
      const nextValue = runIfFunc(next, resolvedValue)

      if (!onUpdate(resolvedValue, nextValue)) return

      if (!controlled) setDefaultValue(nextValue)

      onChange(nextValue)
    },
    [controlled, resolvedValue, onChange, onUpdate],
  )

  return [resolvedValue, setValue] as [T, Dispatch<SetStateAction<T>>]
}
