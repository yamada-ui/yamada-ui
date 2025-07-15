"use client"

import type { Dispatch, SetStateAction } from "react"
import { useState } from "react"
import { isNull, isUndefined, runIfFn, useCallbackRef } from "../../utils"

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
  const controlled = !isUndefined(value)
  const currentValue = (controlled ? value : defaultValue) as Y

  const setValue = useCallbackRef(
    (next: SetStateAction<Y>) => {
      const nextValue = runIfFn(next, currentValue)

      if (!onUpdate(currentValue, nextValue)) return

      if (!controlled || isUndefined(nextValue) || isNull(nextValue))
        setDefaultValue(nextValue)

      onChange(nextValue)
    },
    [controlled, currentValue, onChange, onUpdate],
  )

  return [currentValue, setValue]
}
