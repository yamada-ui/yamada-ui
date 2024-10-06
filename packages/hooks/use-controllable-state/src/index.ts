import type { Dispatch, SetStateAction } from "react"
import {
  isNull,
  isUndefined,
  runIfFunc,
  useCallbackRef,
} from "@yamada-ui/utils"
import { useState } from "react"

interface UseControllableStateMethods<Y> {
  onChange?: (value: Y) => void
  onUpdate?: (prev: Y, next: Y) => boolean
}

export interface UseControllableStateProps<Y>
  extends UseControllableStateMethods<Y> {
  defaultValue?: (() => Y) | Y
  value?: Y
}

export function useControllableState<Y>(
  props: {
    value: Y
    defaultValue?: (() => Y) | Y
  } & UseControllableStateMethods<Y>,
): [Y, Dispatch<SetStateAction<Y>>]

export function useControllableState<Y>(
  props: {
    defaultValue: (() => Y) | Y
    value?: Y
  } & UseControllableStateMethods<Y>,
): [Y, Dispatch<SetStateAction<Y>>]

export function useControllableState<Y>(
  props: UseControllableStateProps<Y>,
): [Y, Dispatch<SetStateAction<Y>>]

export function useControllableState<Y>({
  value,
  ...rest
}: UseControllableStateProps<Y>) {
  rest.onUpdate ??= (prev, next) => prev !== next

  const onChange = useCallbackRef(rest.onChange)
  const onUpdate = useCallbackRef(rest.onUpdate)

  const [defaultValue, setDefaultValue] = useState(rest.defaultValue)
  const controlled = value !== undefined
  const resolvedValue = controlled ? value : defaultValue

  const setValue = useCallbackRef(
    (next: SetStateAction<Y>) => {
      const nextValue = runIfFunc(next, resolvedValue as Y)

      if (!onUpdate(resolvedValue as Y, nextValue)) return

      if (!controlled || isUndefined(nextValue) || isNull(nextValue))
        setDefaultValue(nextValue)

      onChange(nextValue)
    },
    [controlled, resolvedValue, onChange, onUpdate],
  )

  return [resolvedValue, setValue]
}
