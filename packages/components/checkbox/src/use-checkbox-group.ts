import type { PropGetter } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import type { ChangeEvent, ReactNode } from "react"
import type { CheckboxProps } from "./checkbox"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { isObject, useCallbackRef } from "@yamada-ui/utils"
import { useCallback } from "react"

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
   * If `true`, input elements will receive `checked` attribute instead of `isChecked`.
   *
   * This assumes, you're using native radio inputs.
   *
   * @default false
   *
   * @deprecated It will be deprecated in version 2.0.
   */
  isNative?: boolean
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
  isNative,
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
      const isChecked = isEvent(evOrValue)
        ? evOrValue.target.checked
        : !value.includes(evOrValue)

      const selectedValue = (
        isEvent(evOrValue) ? evOrValue.target.value : evOrValue
      ) as Y

      const nextValue = isChecked
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
    { checked?: boolean; isChecked?: boolean; value?: Y }
  > = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref,
      [isNative ? "checked" : "isChecked"]: value.some(
        (val) => String(props.value) === String(val),
      ),
      ...(!isNative
        ? { checked: value.some((val) => String(props.value) === String(val)) }
        : {}),
      onChange,
    }),
    [onChange, isNative, value],
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
