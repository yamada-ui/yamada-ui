import { useCallbackRef, runIfFunc } from '@yamada-ui/utils'
import { Dispatch, SetStateAction, useState } from 'react'

export type UseControllableStateProps<T extends any> = {
  value?: T
  defaultValue?: T | (() => T)
  onChange?: (value: T) => void
  onUpdate?: (prev: T, next: T) => boolean
}

export const useControllableState = <T extends any>({
  value: _value,
  defaultValue,
  onChange: _onChange,
  onUpdate: _onUpdate = (prev, next) => prev !== next,
}: UseControllableStateProps<T>) => {
  const onChange = useCallbackRef(_onChange)
  const onUpdate = useCallbackRef(_onUpdate)

  const [uncontrolledState, setUncontrolledState] = useState(defaultValue as T)
  const controlled = _value !== undefined
  const value = controlled ? _value : uncontrolledState

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
