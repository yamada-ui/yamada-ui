"use client"

import type { ChangeEvent } from "react"
import type { HTMLProps, Orientation, PropGetter } from "../../core"
import type { FieldProps } from "../field"
import { useCallback, useId } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { createDescendant } from "../../hooks/use-descendant"
import {
  ariaAttr,
  createContext,
  dataAttr,
  handlerAll,
  mergeRefs,
  visuallyHiddenAttributes,
} from "../../utils"

export interface SegmentedControlContext
  extends Omit<UseSegmentedControlReturn, "descendants" | "getRootProps"> {}

export const [SegmentedControlContext, useSegmentedControlContext] =
  createContext<SegmentedControlContext>({ name: "SegmentedControlContext" })

export const { DescendantsContext, useDescendant, useDescendants } =
  createDescendant<HTMLInputElement>()

export interface UseSegmentedControlProps<Y extends string = string>
  extends Omit<HTMLProps, "onChange"> {
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * The initial value of the segmented control.
   */
  defaultValue?: Y
  /**
   * If `true`, the segmented control will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The orientation of the segmented control.
   *
   * @default 'horizontal'
   */
  orientation?: Orientation
  /**
   * If `true`, the segmented control will be readonly.
   *
   * @default false
   */
  readOnly?: boolean
  /**
   * The value of the segmented control.
   */
  value?: Y
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: (value: Y) => void
}

export const useSegmentedControl = <Y extends string = string>({
  id,
  name,
  defaultValue,
  disabled,
  orientation = "horizontal",
  readOnly,
  value: valueProp,
  onChange: onChangeProp,
  ...rest
}: UseSegmentedControlProps<Y> = {}) => {
  const uuid = useId()
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const descendants = useDescendants()

  id ??= uuid
  name ??= uuid

  const getRootProps: PropGetter = useCallback(
    (props) => ({
      id,
      "aria-disabled": ariaAttr(disabled),
      "aria-orientation": orientation,
      "data-disabled": dataAttr(disabled),
      "data-orientation": orientation,
      "data-readonly": dataAttr(readOnly),
      role: "radiogroup",
      ...rest,
      ...props,
    }),
    [disabled, id, orientation, readOnly, rest],
  )

  return {
    id,
    name,
    descendants,
    disabled,
    orientation,
    readOnly,
    setValue,
    value,
    getRootProps,
  }
}

export type UseSegmentedControlReturn = ReturnType<typeof useSegmentedControl>

export interface UseSegmentedControlItemProps<Y extends string = string>
  extends HTMLProps<"label">,
    Pick<FieldProps, "disabled" | "readOnly"> {
  /**
   * The value of the segmented control item.
   */
  value: Y
  /**
   * Props for the input element.
   */
  inputProps?: HTMLProps<"input">
}

export const useSegmentedControlItem = <Y extends string = string>({
  disabled,
  readOnly,
  value,
  inputProps,
  ...rest
}: UseSegmentedControlItemProps<Y>) => {
  const {
    name,
    disabled: rootDisabled,
    orientation,
    readOnly: rootReadOnly,
    setValue,
    value: selectedValue,
  } = useSegmentedControlContext()
  const { index, register } = useDescendant({ disabled: disabled || readOnly })
  const checked = value === selectedValue
  const trulyDisabled = disabled ?? rootDisabled
  const trulyReadOnly = readOnly ?? rootReadOnly
  const interactive = !(trulyReadOnly || trulyDisabled)

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setValue(ev.target.value)
    },
    [setValue],
  )

  const getLabelProps: PropGetter<"label"> = useCallback(
    (props) => ({
      "aria-disabled": ariaAttr(trulyDisabled),
      "aria-readonly": ariaAttr(trulyReadOnly),
      "data-checked": dataAttr(checked),
      "data-disabled": dataAttr(trulyDisabled),
      "data-index": index.toString(),
      "data-orientation": orientation,
      "data-readonly": dataAttr(trulyReadOnly),
      "data-root-disabled": dataAttr(rootDisabled),
      "data-root-readonly": dataAttr(rootReadOnly),
      ...props,
      ...rest,
    }),
    [
      orientation,
      trulyDisabled,
      index,
      trulyReadOnly,
      checked,
      rootDisabled,
      rootReadOnly,
      rest,
    ],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    ({ ref, ...props } = {}) => ({
      type: "radio",
      name,
      style: visuallyHiddenAttributes.style,
      "aria-disabled": ariaAttr(trulyDisabled),
      "aria-readonly": ariaAttr(trulyReadOnly),
      "data-checked": dataAttr(checked),
      "data-disabled": dataAttr(trulyDisabled),
      "data-orientation": orientation,
      "data-readonly": dataAttr(trulyReadOnly),
      checked,
      disabled: trulyDisabled || trulyReadOnly,
      readOnly: trulyReadOnly,
      tabIndex: interactive ? undefined : -1,
      value,
      ...inputProps,
      ...props,
      ref: mergeRefs(register, ref),
      onChange: handlerAll(props.onChange, inputProps?.onChange, onChange),
    }),
    [
      orientation,
      name,
      trulyDisabled,
      trulyReadOnly,
      checked,
      interactive,
      value,
      inputProps,
      register,
      onChange,
    ],
  )

  return {
    getInputProps,
    getLabelProps,
  }
}

export type UseSegmentedControlItemReturn = ReturnType<
  typeof useSegmentedControlItem
>
