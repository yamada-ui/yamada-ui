import type { PropGetter } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { Dict } from "@yamada-ui/utils"
import type {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEvent,
  SyntheticEvent,
} from "react"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { trackFocusVisible } from "@yamada-ui/use-focus-visible"
import {
  dataAttr,
  handlerAll,
  mergeRefs,
  splitObject,
  useCallbackRef,
  useSafeLayoutEffect,
  useUpdateEffect,
} from "@yamada-ui/utils"
import { useCallback, useEffect, useId, useRef, useState } from "react"

export interface UseCheckboxProps<Y extends number | string = string>
  extends FormControlOptions {
  /**
   * id assigned to input.
   */
  id?: string
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * If `true`, the checkbox will be initially checked.
   *
   * @default false
   */
  defaultIsChecked?: boolean
  /**
   * If `true`, the checkbox will be checked.
   *
   * @default false
   */
  isChecked?: boolean
  /**
   * If `true`, the checkbox will be indeterminate.
   *
   * @default false
   */
  isIndeterminate?: boolean
  /**
   * If `true`, the checkbox will be selected when the Enter key is pressed.
   *
   * @default false
   */
  selectOnEnter?: boolean
  /**
   * The tab-index property of the underlying input element.
   */
  tabIndex?: number
  /**
   * The value to be used in the checkbox input.
   */
  value?: Y
  /**
   * The callback invoked when the checkbox is blurred.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>
  /**
   * The callback invoked when the checked state changes.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * The callback invoked when the checkbox is focused.
   */
  onFocus?: FocusEventHandler<HTMLInputElement>
}

export const useCheckbox = <
  Y extends number | string = string,
  M extends Dict = Dict,
>({
  id,
  ...props
}: M & UseCheckboxProps<Y>) => {
  const uuid = useId()

  id ??= uuid

  const {
    id: _id,
    name,
    defaultIsChecked,
    isChecked: isCheckedProp,
    isIndeterminate,
    selectOnEnter,
    tabIndex,
    value,
    onChange: onChangeProp,
    ...computedProps
  } = useFormControlProps({ id, ...props })
  const [
    {
      "aria-readonly": _ariaReadonly,
      disabled,
      readOnly,
      required,
      onBlur: onBlurProp,
      onFocus: onFocusProp,
      ...formControlProps
    },
    rest,
  ] = splitObject(computedProps, formControlProperties)

  const [isFocusVisible, setIsFocusVisible] = useState<boolean>(false)
  const [isFocused, setFocused] = useState<boolean>(false)
  const [isHovered, setHovered] = useState<boolean>(false)
  const [isActive, setActive] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const [isLabel, setIsLabel] = useState<boolean>(true)

  const [isChecked, setIsChecked] = useState<boolean>(!!defaultIsChecked)

  const isControlled = isCheckedProp !== undefined
  const checked = isControlled ? (isCheckedProp as boolean) : isChecked

  const onChange = useCallbackRef(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (readOnly || disabled) {
        ev.preventDefault()

        return
      }

      if (!isControlled)
        setIsChecked(!checked || isIndeterminate ? true : ev.target.checked)

      onChangeProp?.(ev)
    },
    [readOnly, disabled, isControlled, checked, isIndeterminate],
  )
  const onFocus = useCallbackRef(onFocusProp)
  const onBlur = useCallbackRef(onBlurProp)

  const onKeyDown = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === " ") setActive(true)

      if (selectOnEnter && key === "Enter") inputRef.current?.click()
    },
    [setActive, selectOnEnter],
  )

  const onKeyUp = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === " ") setActive(false)
    },
    [setActive],
  )

  useEffect(() => {
    return trackFocusVisible(setIsFocusVisible)
  }, [])

  useSafeLayoutEffect(() => {
    if (inputRef.current)
      inputRef.current.indeterminate = Boolean(isIndeterminate)
  }, [isIndeterminate])

  useUpdateEffect(() => {
    if (disabled) setFocused(false)
  }, [disabled, setFocused])

  useSafeLayoutEffect(() => {
    if (!inputRef.current?.form) return

    inputRef.current.form.onreset = () => setIsChecked(!!defaultIsChecked)
  }, [])

  useSafeLayoutEffect(() => {
    if (!inputRef.current) return

    if (inputRef.current.checked !== checked)
      setIsChecked(inputRef.current.checked)
  }, [inputRef.current])

  const getContainerProps: PropGetter<"label"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref: mergeRefs(ref, (el: HTMLElement | undefined) => {
        if (el) setIsLabel(el.tagName === "LABEL")
      }),
      "data-checked": dataAttr(checked),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocused && isFocusVisible),
      onClick: handlerAll(props.onClick, () => {
        if (isLabel) return

        inputRef.current?.click()

        requestAnimationFrame(() => inputRef.current?.focus())
      }),
    }),
    [checked, isLabel, isFocused, isFocusVisible, formControlProps],
  )

  const getIconProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref,
      "aria-hidden": true,
      "data-active": dataAttr(isActive),
      "data-checked": dataAttr(checked),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocused && isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-indeterminate": dataAttr(isIndeterminate),
      onMouseDown: handlerAll(props.onMouseDown, (ev: React.MouseEvent) => {
        if (isFocused) ev.preventDefault()

        setActive(true)
      }),
      onMouseEnter: handlerAll(props.onMouseEnter, () => setHovered(true)),
      onMouseLeave: handlerAll(props.onMouseLeave, () => setHovered(false)),
      onMouseUp: handlerAll(props.onMouseUp, () => setActive(false)),
    }),
    [
      isActive,
      checked,
      isFocused,
      isHovered,
      isFocusVisible,
      isIndeterminate,
      formControlProps,
    ],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      id,
      ref: mergeRefs(inputRef, ref),
      type: "checkbox",
      name,
      style: {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0px",
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px",
      },
      "aria-checked": isIndeterminate ? "mixed" : checked,
      checked,
      disabled,
      readOnly,
      required,
      tabIndex,
      value,
      onBlur: handlerAll(props.onBlur, onBlur, () => setFocused(false)),
      onChange: handlerAll(props.onChange, onChange),
      onFocus: handlerAll(props.onFocus, onFocus, () => setFocused(true)),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      onKeyUp: handlerAll(props.onKeyUp, onKeyUp),
    }),
    [
      isIndeterminate,
      formControlProps,
      id,
      name,
      value,
      tabIndex,
      required,
      disabled,
      readOnly,
      checked,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
    ],
  )

  const getLabelProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...formControlProps,
      ...props,
      ref,
      "data-checked": dataAttr(checked),
      onMouseDown: handlerAll(props.onMouseDown, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
      onTouchStart: handlerAll(props.onTouchStart, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
    }),
    [checked, formControlProps],
  )

  return {
    isActive,
    isChecked: checked,
    isFocused,
    isFocusVisible,
    isHovered,
    isIndeterminate,
    props: rest,
    getContainerProps,
    getIconProps,
    getInputProps,
    getLabelProps,
  }
}

export type UseCheckboxReturn = ReturnType<typeof useCheckbox>
