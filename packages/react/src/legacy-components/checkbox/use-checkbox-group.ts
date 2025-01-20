import type { ChangeEvent, ReactNode } from "react"
import type { PropGetter } from "../../core"
import type { Dict } from "../../utils"
import type { CheckboxProps } from "./checkbox"
import { useCallback } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { isObject, useCallbackRef } from "../../utils"

export interface CheckboxItem<Y extends number | string = string>
  extends CheckboxProps<Y> {
  label?: ReactNode
}

const isEvent = (value: any): value is { target: HTMLInputElement } =>
  value && isObject(value) && isObject(value.target)

export interface UseCheckboxGroupProps<Y extends number | string = string> {
  /**
   * The initial value of the checkbox group.
   */
  defaultValue?: Y[]
  /**
   * The value of the checkbox group.
   */
  value?: Y[]
  /**
   * The callback fired when any children checkbox is checked or unchecked.
   */
  onChange?: (value: Y[]) => void
}

export const useCheckboxGroup = <
  Y extends number | string,
  M extends Dict = Dict,
>({
  defaultValue = [],
  value: valueProp,
  onChange: onChangeProp,
  ...props
}: M & UseCheckboxGroupProps<Y>) => {
  const onChangeRef = useCallbackRef(onChangeProp)

  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeRef,
  })

  const onChange = useCallback(
    (evOrValue: ChangeEvent<HTMLInputElement> | Y) => {
      const checked = isEvent(evOrValue)
        ? evOrValue.target.checked
        : !value.includes(evOrValue)

      const selectedValue = (
        isEvent(evOrValue) ? evOrValue.target.value : evOrValue
      ) as Y

      const nextValue = checked
        ? [...value, selectedValue]
        : value.filter((v) => String(v) !== String(selectedValue))

      setValue(nextValue)
    },
    [value, setValue],
  )

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      role: "group",
      ...props,
      ref,
    }),
    [],
  )

  const getCheckboxProps: PropGetter<
    { value?: Y },
    { checked?: boolean; value?: Y }
  > = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref,
      checked: value.some((val) => String(props.value) === String(val)),
      onChange,
    }),
    [onChange, value],
  )

  return {
    props,
    setValue,
    value,
    getCheckboxProps,
    getContainerProps,
    onChange,
  }
}

export type UseCheckboxGroupReturn<Y extends number | string = string> =
  ReturnType<typeof useCheckboxGroup<Y>>
