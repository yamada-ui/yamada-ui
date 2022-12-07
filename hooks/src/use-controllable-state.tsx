import { useCallbackRef, runIfFunc } from '@yamada-ui/utils'
import { Dispatch, SetStateAction, useState } from 'react'

export type UseControllableStateProps<T extends any> = {
  value?: T
  defaultValue?: T | (() => T)
  onChange?: (value: T) => void
  onUpdate?: (prev: T, next: T) => boolean
}

export const useControllableState = <T extends any>(props: UseControllableStateProps<T>) => {
  props.onUpdate = props.onUpdate ?? ((prev, next) => prev !== next)

  const onChange = useCallbackRef(props.onChange)
  const onUpdate = useCallbackRef(props.onUpdate)

  const [uncontrolledState, setUncontrolledState] = useState(props.defaultValue as T)
  const controlled = props.value !== undefined
  const value = controlled ? (props.value as T) : uncontrolledState

  const setValue = useCallbackRef(
    (next: SetStateAction<T>) => {
      const nextValue = runIfFunc(next, value)

      if (!onUpdate(value, nextValue)) return

      if (!controlled) setUncontrolledState(nextValue)

      onChange(nextValue)
    },
    [controlled, value, onChange, onUpdate],
  )

  return [value, setValue] as [T, Dispatch<SetStateAction<T>>]
}
