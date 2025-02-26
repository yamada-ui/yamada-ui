import type { Dispatch, SetStateAction } from "react"
import { useState } from "react"
import { isNull, isUndefined, runIfFunc, useCallbackRef } from "../../utils"

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
  props: UseControllableStateMethods<Y> & {
    value: Y
    defaultValue?: (() => Y) | Y
  },
): [Y, Dispatch<SetStateAction<Y>>]

export function useControllableState<Y>(
  props: UseControllableStateMethods<Y> & {
    defaultValue: (() => Y) | Y
    value?: Y
  },
): [Y, Dispatch<SetStateAction<Y>>]

export function useControllableState<Y>(
  props: UseControllableStateProps<Y>,
): [Y, Dispatch<SetStateAction<Y>>]

export function useControllableState<Y>({
  defaultValue: defaultValueProp,
  value,
  onChange: onChangeProp,
  onUpdate: onUpdateProp = (prev, next) => prev !== next,
}: UseControllableStateProps<Y>) {
  const onChange = useCallbackRef(onChangeProp)
  const onUpdate = useCallbackRef(onUpdateProp)

  const [defaultValue, setDefaultValue] = useState(defaultValueProp)
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
