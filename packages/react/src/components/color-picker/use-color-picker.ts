"use client"

import type { ChangeEvent, FocusEvent, MouseEvent } from "react"
import type { HTMLRefAttributes, PropGetter } from "../../core"
import type { UseComboboxProps } from "../../hooks/use-combobox"
import type { ColorFormat } from "../../utils"
import type { UseColorSelectorProps } from "../color-selector"
import type { FieldProps } from "../field"
import { useCallback, useRef } from "react"
import { useCombobox } from "../../hooks/use-combobox"
import { useControllableState } from "../../hooks/use-controllable-state"
import { useEyeDropper } from "../../hooks/use-eye-dropper"
import { useI18n } from "../../providers/i18n-provider"
import {
  ariaAttr,
  calcFormat,
  contains,
  convertColor,
  handlerAll,
  mergeRefs,
  runIfFn,
  runKeyAction,
} from "../../utils"
import { useFieldProps } from "../field"

export interface UseColorPickerProps
  extends Omit<
      UseComboboxProps,
      | "closeOnSelect"
      | "initialFocusValue"
      | "onChange"
      | "ref"
      | "selectFocusRef"
      | "selectOnSpace"
    >,
    HTMLRefAttributes<"input">,
    FieldProps {
  /**
   * The `id` attribute of the input element.
   */
  id?: string
  /**
   * The `name` attribute of the input element.
   */
  name?: string
  /**
   * If `true`, allows input.
   *
   * @default true
   */
  allowInput?: boolean
  /**
   * If `true`, the color picker will be closed when the input value changes.
   *
   * @default false
   */
  closeOnChange?: ((ev: ChangeEvent<HTMLInputElement>) => boolean) | boolean
  /**
   * The initial value of the color picker.
   */
  defaultValue?: string
  /**
   * The fallback value of the color picker.
   *
   * @default '#FFFFFF'
   */
  fallbackValue?: string
  /**
   * The format of the color picker.
   * Automatically determines the format of `value` or `defaultValue`.
   *
   * @default 'hex'
   */
  format?: ColorFormat
  /**
   * The function to format the input value.
   */
  formatInput?: (value: string) => string
  /**
   * If `true`, the color picker will be opened when the input value changes.
   *
   * @default true
   */
  openOnChange?: ((ev: ChangeEvent<HTMLInputElement>) => boolean) | boolean
  /**
   * If `true`, the color picker will be opened when the input is focused.
   *
   * @default false
   */
  openOnFocus?: boolean
  /**
   * The pattern used to check the input element.
   */
  pattern?: RegExp
  /**
   * The placeholder for color picker.
   */
  placeholder?: string
  /**
   * The value of the color picker.
   */
  value?: string
  /**
   * The callback invoked when the value changes.
   */
  onChange?: (value: string) => void
  /**
   * The callback invoked when input value state changes.
   */
  onInputChange?: (ev: ChangeEvent<HTMLInputElement>) => void
}

export const useColorPicker = (props: UseColorPickerProps) => {
  const { t } = useI18n("colorPicker")
  const {
    props: {
      id,
      ref,
      name,
      allowInput = true,
      closeOnChange = false,
      defaultValue,
      disabled,
      fallbackValue = "#FFFFFF",
      format: formatProp,
      formatInput,
      openOnChange = true,
      openOnFocus = true,
      pattern,
      placeholder,
      readOnly,
      required,
      value: valueProp,
      onChange: onChangeProp,
      onInputChange: onInputChangeProp,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const {
    interactive,
    open,
    getContentProps: getComboboxContentProps,
    getTriggerProps,
    onClose,
    onOpen,
  } = useCombobox({
    disabled,
    openOnEnter: !allowInput,
    openOnSpace: !allowInput,
    readOnly,
    ...ariaProps,
    ...dataProps,
    ...eventProps,
    ...rest,
  })
  const format =
    formatProp ?? calcFormat(valueProp ?? defaultValue ?? fallbackValue)
  const alpha = format.endsWith("a")
  const rootRef = useRef<HTMLDivElement>(null)
  const fieldRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const { supported: supportedEyeDropper, onOpen: onOpenEyeDropper } =
    useEyeDropper()

  const onClick = useCallback(() => {
    if (!interactive || !allowInput) return

    inputRef.current?.focus()
  }, [allowInput, interactive])

  const onMouseDown = useCallback(
    (ev: MouseEvent<HTMLInputElement>) => {
      if (!openOnFocus) return

      ev.preventDefault()
      ev.stopPropagation()
    },
    [openOnFocus],
  )

  const onFocus = useCallback(
    (ev: FocusEvent<HTMLInputElement>) => {
      ev.preventDefault()
      ev.stopPropagation()

      if (openOnFocus) onOpen()
    },
    [onOpen, openOnFocus],
  )

  const onBlur = useCallback(
    (ev: FocusEvent<HTMLInputElement>) => {
      if (
        contains(rootRef.current, ev.relatedTarget) ||
        contains(contentRef.current, ev.relatedTarget)
      ) {
        ev.preventDefault()
      } else {
        setValue((prev) => {
          if (!prev) return prev

          let value = convertColor(prev)(format)

          if (!value) return prev

          if (formatInput) value = formatInput(value)

          if (pattern) value = value.replace(pattern, "")

          return value
        })
      }
    },
    [format, formatInput, pattern, setValue],
  )

  const onInputChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (!allowInput) return

      onInputChangeProp?.(ev)

      if (runIfFn(closeOnChange, ev)) {
        onClose()
      } else if (runIfFn(openOnChange, ev)) {
        onOpen()
      }

      let inputValue = ev.target.value

      if (formatInput) inputValue = formatInput(inputValue)

      if (pattern) inputValue = inputValue.replace(pattern, "")

      setValue(inputValue)
    },
    [
      allowInput,
      closeOnChange,
      formatInput,
      onClose,
      onInputChangeProp,
      onOpen,
      openOnChange,
      pattern,
      setValue,
    ],
  )

  const onEyeDropperClick = useCallback(async () => {
    if (!interactive) return

    const result = await onOpenEyeDropper()

    if (result?.sRGBHex) setValue(result.sRGBHex)
  }, [interactive, onOpenEyeDropper, setValue])

  const getRootProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) => ({
      ref: mergeRefs(ref, rootRef),
      ...dataProps,
      ...props,
    }),
    [dataProps],
  )

  const getFieldProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) =>
      getTriggerProps({
        ref: mergeRefs(ref, fieldRef),
        "aria-haspopup": "dialog",
        tabIndex: !allowInput ? 0 : -1,
        ...props,
        onClick: handlerAll(props.onClick, onClick),
      }),

    [allowInput, getTriggerProps, onClick],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}) => ({
      id,
      ref: mergeRefs(props.ref, ref, inputRef),
      name,
      style: {
        ...(!allowInput ? { pointerEvents: "none" } : {}),
        ...props.style,
      },
      autoComplete: "off",
      disabled,
      placeholder,
      readOnly,
      required,
      tabIndex: allowInput ? 0 : -1,
      value,
      ...dataProps,
      ...props,
      onBlur: handlerAll(props.onBlur, onBlur),
      onChange: handlerAll(props.onChange, onInputChange),
      onFocus: handlerAll(props.onFocus, onFocus),
      onMouseDown: handlerAll(props.onMouseDown, onMouseDown),
    }),
    [
      allowInput,
      dataProps,
      disabled,
      id,
      name,
      onBlur,
      onFocus,
      onInputChange,
      onMouseDown,
      placeholder,
      readOnly,
      ref,
      required,
      value,
    ],
  )

  const getEyeDropperProps: PropGetter = useCallback(
    (props = {}) => ({
      ...dataProps,
      "aria-disabled": ariaAttr(!interactive),
      "aria-label": t("Pick a color"),
      hidden: !supportedEyeDropper,
      role: "button",
      tabIndex: interactive ? 0 : -1,
      ...props,
      onClick: handlerAll(props.onClick, onEyeDropperClick),
      onKeyDown: handlerAll(props.onKeyDown, (ev) =>
        runKeyAction(ev, {
          Enter: onEyeDropperClick,
          Space: onEyeDropperClick,
        }),
      ),
    }),
    [dataProps, interactive, onEyeDropperClick, supportedEyeDropper, t],
  )

  const getContentProps: PropGetter = useCallback(
    ({ ref, ...props } = {}) =>
      getComboboxContentProps({
        ref: mergeRefs(ref, contentRef),
        role: "dialog",
        ...props,
      }),
    [getComboboxContentProps],
  )

  const getSelectorProps: PropGetter<UseColorSelectorProps> = useCallback(
    (props = {}) => ({
      disabled,
      fallbackValue,
      format,
      readOnly,
      value,
      ...props,
      onChange: handlerAll(props.onChange, setValue),
    }),
    [disabled, fallbackValue, format, readOnly, value, setValue],
  )

  return {
    alpha,
    format,
    interactive,
    open,
    setValue,
    value,
    getContentProps,
    getEyeDropperProps,
    getFieldProps,
    getInputProps,
    getRootProps,
    getSelectorProps,
    onClose,
    onOpen,
  }
}

export type UseColorPickerReturn = ReturnType<typeof useColorPicker>
