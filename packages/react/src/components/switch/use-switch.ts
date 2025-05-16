import type {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEvent,
  SyntheticEvent,
} from "react"
import type { PropGetter } from "../../core"
import type { Dict } from "../../utils"
import type { FieldProps } from "../field"
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react"
import { trackFocusVisible } from "../../hooks/use-focus-visible"
import {
  dataAttr,
  handlerAll,
  mergeRefs,
  useCallbackRef,
  useSafeLayoutEffect,
  useUpdateEffect,
} from "../../utils"
import { useFieldProps } from "../field"

export interface UseSwitchProps<Y extends number | string = string>
  extends FieldProps {
  /**
   * id assigned to input.
   */
  id?: string
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * If `true`, the switch will be checked.
   *
   * @default false
   */
  checked?: boolean
  /**
   * If `true`, the switch will be initially checked.
   *
   * @default false
   */
  defaultChecked?: boolean
  /**
   * If `true`, the switch will be indeterminate.
   *
   * @default false
   */
  indeterminate?: boolean
  /**
   * If `true`, the switch will be selected when the Enter key is pressed.
   *
   * @default false
   */
  selectOnEnter?: boolean
  /**
   * The tab-index property of the underlying input element.
   */
  tabIndex?: number
  /**
   * The value to be used in the switch input.
   */
  value?: Y
  /**
   * The callback invoked when the switch is blurred.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>
  /**
   * The callback invoked when the checked state changes.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * The callback invoked when the switch is focused.
   */
  onFocus?: FocusEventHandler<HTMLInputElement>
}

export const useSwitch = <
  Y extends number | string = string,
  M extends Dict = Dict,
>({
  id,
  ...props
}: M & UseSwitchProps<Y>) => {
  const uuid = useId()

  id ??= uuid

  const {
    props: {
      id: _id,
      name,
      checked: checkedProp,
      defaultChecked,
      disabled,
      indeterminate,
      readOnly,
      required,
      selectOnEnter,
      tabIndex,
      value,
      onChange: onChangeProp,
      ...rest
    },
    ariaProps: { "aria-readonly": _ariaReadonly, ...ariaProps },
    dataProps,
    eventProps: { onBlur: onBlurProp, onFocus: onFocusProp },
  } = useFieldProps({
    id,
    ...props,
  })

  const formControlProps = useMemo(
    () => ({
      ...ariaProps,
      ...dataProps,
    }),
    [ariaProps, dataProps],
  )

  const [focusVisible, setFocusVisible] = useState<boolean>(false)
  const [focused, setFocused] = useState<boolean>(false)
  const [hovered, setHovered] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [label, setLabel] = useState<boolean>(true)
  const [checked, setIsChecked] = useState<boolean>(!!defaultChecked)
  const controlled = checkedProp !== undefined
  const resolvedChecked = controlled ? (checkedProp as boolean) : checked

  const onChange = useCallbackRef(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (readOnly || disabled) {
        ev.preventDefault()

        return
      }

      if (!controlled)
        setIsChecked(
          !resolvedChecked || indeterminate ? true : ev.target.checked,
        )

      onChangeProp?.(ev)
    },
    [readOnly, disabled, controlled, resolvedChecked, indeterminate],
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
    return trackFocusVisible(setFocusVisible)
  }, [])

  useSafeLayoutEffect(() => {
    if (inputRef.current)
      inputRef.current.indeterminate = Boolean(indeterminate)
  }, [indeterminate])

  useUpdateEffect(() => {
    if (disabled) setFocused(false)
  }, [disabled, setFocused])

  useSafeLayoutEffect(() => {
    if (!inputRef.current?.form) return

    inputRef.current.form.onreset = () => setIsChecked(!!defaultChecked)
  }, [])

  useSafeLayoutEffect(() => {
    if (!inputRef.current) return

    if (inputRef.current.checked !== resolvedChecked)
      setIsChecked(inputRef.current.checked)
  }, [inputRef.current])

  const getRootProps: PropGetter<"label"> = useCallback(
    ({ ref, ...props } = {}) => ({
      ...formControlProps,
      ...props,
      ...rest,
      ref: mergeRefs(ref, (el: HTMLElement | undefined) => {
        if (el) setLabel(el.tagName === "LABEL")
      }),
      "data-checked": dataAttr(resolvedChecked),
      "data-focus": dataAttr(focused),
      "data-focus-visible": dataAttr(focused && focusVisible),
      onClick: handlerAll(props.onClick, () => {
        if (label) return

        inputRef.current?.click()

        requestAnimationFrame(() => inputRef.current?.focus())
      }),
    }),
    [formControlProps, rest, resolvedChecked, focused, focusVisible, label],
  )

  const getIconProps: PropGetter = useCallback(
    (props = {}) => ({
      ...formControlProps,
      ...props,
      "aria-hidden": true,
      "data-active": dataAttr(active),
      "data-checked": dataAttr(resolvedChecked),
      "data-focus": dataAttr(focused),
      "data-focus-visible": dataAttr(focused && focusVisible),
      "data-hover": dataAttr(hovered),
      "data-indeterminate": dataAttr(indeterminate),
      onMouseDown: handlerAll(props.onMouseDown, (ev: React.MouseEvent) => {
        if (focused) ev.preventDefault()

        setActive(true)
      }),
      onMouseEnter: handlerAll(props.onMouseEnter, () => setHovered(true)),
      onMouseLeave: handlerAll(props.onMouseLeave, () => setHovered(false)),
      onMouseUp: handlerAll(props.onMouseUp, () => setActive(false)),
    }),
    [
      active,
      resolvedChecked,
      focused,
      hovered,
      focusVisible,
      indeterminate,
      formControlProps,
    ],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    ({ ref, ...props } = {}) => ({
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
      "aria-checked": indeterminate ? "mixed" : resolvedChecked,
      checked: resolvedChecked,
      disabled,
      readOnly,
      required,
      role: "switch",
      tabIndex,
      value,
      onBlur: handlerAll(props.onBlur, onBlur, () => setFocused(false)),
      onChange: handlerAll(props.onChange, onChange),
      onFocus: handlerAll(props.onFocus, onFocus, () => setFocused(true)),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
      onKeyUp: handlerAll(props.onKeyUp, onKeyUp),
    }),
    [
      indeterminate,
      formControlProps,
      id,
      name,
      value,
      tabIndex,
      required,
      disabled,
      readOnly,
      resolvedChecked,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
    ],
  )

  const getLabelProps: PropGetter<"span"> = useCallback(
    (props = {}) => ({
      ...formControlProps,
      ...props,
      "data-checked": dataAttr(resolvedChecked),
      onMouseDown: handlerAll(props.onMouseDown, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
      onTouchStart: handlerAll(props.onTouchStart, (ev: SyntheticEvent) => {
        ev.preventDefault()
        ev.stopPropagation()
      }),
    }),
    [resolvedChecked, formControlProps],
  )

  return {
    active,
    checked: resolvedChecked,
    focused,
    focusVisible,
    hovered,
    indeterminate,
    getIconProps,
    getInputProps,
    getLabelProps,
    getRootProps,
  }
}

export type UseSwitchReturn = ReturnType<typeof useSwitch>
