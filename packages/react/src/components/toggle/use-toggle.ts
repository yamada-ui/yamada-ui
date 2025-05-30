import type { ChangeEvent } from "react"
import type { HTMLProps, HTMLRefAttributes, PropGetter } from "../../core"
import type { Merge } from "../../utils"
import type { FieldProps } from "../field"
import { useCallback, useMemo, useRef } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useI18n } from "../../providers/i18n-provider"
import {
  ariaAttr,
  dataAttr,
  handlerAll,
  isArray,
  isUndefined,
  mergeRefs,
  visuallyHiddenAttributes,
} from "../../utils"
import { useFieldProps } from "../field"
import { useToggleGroupContext } from "./use-toggle-group"

export interface UseToggleProps<Y extends number | string = string>
  extends FieldProps,
    HTMLRefAttributes<"input">,
    Omit<HTMLProps<"button">, "onChange" | "ref" | "value"> {
  /**
   * If `true`, the toggle button is represented as active.
   *
   * @default false
   */
  active?: boolean
  /**
   * If `true`, the toggle button will be checked.
   */
  checked?: boolean
  /**
   * If `true`, the toggle button will be initially checked.
   *
   * @default false
   */
  defaultChecked?: boolean
  /**
   * The value of the toggle button.
   */
  value?: Y
  /**
   * The callback invoked when checked state changes.
   */
  onChange?: (checked: boolean) => void
}

export const useToggle = <Y extends number | string = string>(
  props: UseToggleProps<Y>,
) => {
  const {
    disabled: groupDisabled,
    readOnly: groupReadOnly,
    value: groupValue,
    onChange: onChangeGroup,
    onChangeMapRef,
  } = useToggleGroupContext() ?? {}

  const { t } = useI18n("toggle")

  const {
    props: {
      id,
      ref,
      form,
      name,
      active,
      checked: checkedProp,
      defaultChecked = false,
      disabled,
      readOnly,
      required,
      value,
      onChange: onChangeProp,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps<HTMLElement, UseToggleProps<Y>>({
    disabled: groupDisabled,
    readOnly: groupReadOnly,
    ...props,
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const [checked, setChecked] = useControllableState({
    defaultValue: defaultChecked,
    value: checkedProp,
    onChange: onChangeProp,
  })
  const interactive = !(readOnly || disabled)
  const controlled = !isUndefined(groupValue)
  const trulyChecked = useMemo(() => {
    if (!controlled) {
      return checked
    } else {
      return isArray(groupValue)
        ? groupValue.includes(value ?? "")
        : value === groupValue
    }
  }, [controlled, groupValue, checked, value])

  if (controlled && isUndefined(value))
    console.warn(`Toggle: value is required. Please set the value.`)

  if (value) onChangeMapRef?.current.set(value, setChecked)

  const onClick = useCallback(() => {
    if (!interactive) return

    setChecked((prev) => !prev)
    onChangeGroup?.(value)
  }, [onChangeGroup, setChecked, value, interactive])

  const onChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setChecked(ev.target.checked)
      onChangeGroup?.(value)
    },
    [onChangeGroup, setChecked, value],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}) => ({
      ...visuallyHiddenAttributes,
      ...ariaProps,
      ...dataProps,
      ...eventProps,
      id,
      form,
      type: "checkbox",
      name,
      checked,
      disabled,
      readOnly,
      required,
      value,
      ...props,
      ref: mergeRefs(inputRef, ref, props.ref),
      onChange: handlerAll(props.onChange, onChange),
    }),
    [
      ariaProps,
      checked,
      dataProps,
      disabled,
      eventProps,
      form,
      id,
      name,
      onChange,
      readOnly,
      ref,
      required,
      value,
    ],
  )

  const getButtonProps: PropGetter<
    "button",
    undefined,
    Merge<HTMLProps<"button">, { "aria-label": string }>
  > = useCallback(
    (props = {}) => ({
      type: "button",
      ...dataProps,
      "aria-disabled": ariaAttr(!interactive),
      "aria-label": value?.toString() ?? t("Toggle button"),
      "aria-pressed": trulyChecked,
      "data-active": dataAttr(active),
      "data-checked": dataAttr(trulyChecked),
      disabled,
      ...rest,
      ...props,
      onClick: handlerAll(rest.onClick, props.onClick, onClick),
    }),
    [
      dataProps,
      value,
      trulyChecked,
      active,
      disabled,
      rest,
      onClick,
      interactive,
      t,
    ],
  )

  return {
    checked: trulyChecked,
    setChecked,
    getButtonProps,
    getInputProps,
  }
}

export type UseToggleReturn = ReturnType<typeof useToggle>
