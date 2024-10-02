import type {
  CSSUIObject,
  HTMLUIProps,
  PropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import type { ComboBoxProps, PopoverProps } from "@yamada-ui/popover"
import type { ColorFormat } from "@yamada-ui/utils"
import type { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent } from "react"
import type { ColorSelectorProps } from "./color-selector"
import type { UseColorSelectorBaseProps } from "./use-color-selector"
import { layoutStyleProperties } from "@yamada-ui/core"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import { useEyeDropper } from "@yamada-ui/use-eye-dropper"
import { useOutsideClick } from "@yamada-ui/use-outside-click"
import {
  calcFormat,
  convertColor,
  createContext,
  dataAttr,
  getEventRelatedTarget,
  handlerAll,
  isContains,
  mergeRefs,
  pickObject,
  splitObject,
  useUpdateEffect,
} from "@yamada-ui/utils"
import { useCallback, useRef, useState } from "react"

const defaultFormatInput = (value: string) => value

type ColorSelectorThemeProps = ThemeProps<"ColorSelector">

interface ColorPickerContext {
  styles: { [key: string]: CSSUIObject }
  value: string
}

export const [ColorPickerProvider, useColorPickerContext] =
  createContext<ColorPickerContext>({
    name: "ColorPickerContext",
    errorMessage: `useColorPickerContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorPicker />"`,
  })

interface UseColorPickerOptions {
  /**
   * If `true`, allows input.
   *
   * @default true
   */
  allowInput?: boolean
  /**
   * If `true`, the color swatch will be closed when value is selected.
   */
  closeOnSelectSwatch?: boolean
  /**
   * ColorScheme for the color selector component.
   */
  colorSelectorColorScheme?: ColorSelectorThemeProps["colorScheme"]
  /**
   * Size for the color selector component.
   */
  colorSelectorSize?: ColorSelectorThemeProps["size"]
  /**
   * Variant for the color selector component.
   */
  colorSelectorVariant?: ColorSelectorThemeProps["variant"]
  /**
   * The initial value of the color selector.
   */
  defaultColor?: string
  /**
   * A callback function to format the input entered.
   */
  formatInput?: (value: string) => string
  /**
   * If `true` display the eye dropper component.
   *
   * @default false
   */
  withColorSelectorEyeDropper?: boolean
  /**
   * If `true`, display the result component.
   *
   * @default false
   */
  withResult?: boolean
  /**
   * Props for color selector component.
   */
  colorSelectorProps?: ColorSelectorProps
}

export interface UseColorPickerProps
  extends Omit<
      HTMLUIProps<"input">,
      | "animation"
      | "children"
      | "defaultValue"
      | "offset"
      | "onChange"
      | "size"
      | "value"
    >,
    Omit<UseColorSelectorBaseProps, "id" | "name">,
    ComboBoxProps,
    Pick<
      ColorSelectorProps,
      | "swatches"
      | "swatchesColumns"
      | "swatchesLabel"
      | "withChannel"
      | "withPicker"
    >,
    UseColorPickerOptions {}

export const useColorPicker = (props: UseColorPickerProps) => {
  const {
    allowInput = true,
    animation,
    boundary,
    closeDelay,
    closeOnBlur = true,
    closeOnEsc = true,
    closeOnSelectSwatch,
    colorSelectorColorScheme,
    colorSelectorSize,
    colorSelectorVariant,
    defaultColor,
    defaultIsOpen,
    defaultValue,
    duration = 0.2,
    eventListeners,
    fallbackValue,
    flip,
    format,
    formatInput = defaultFormatInput,
    gutter,
    isLazy,
    isOpen: isOpenProp,
    lazyBehavior,
    matchWidth = colorSelectorSize === "full",
    modifiers,
    offset,
    openDelay,
    placement = "bottom-start",
    preventOverflow,
    strategy,
    swatches,
    swatchesColumns,
    swatchesLabel,
    value: valueProp,
    withChannel,
    withColorSelectorEyeDropper = false,
    withPicker,
    withResult = false,
    onChange: onChangeProp,
    onChangeEnd,
    onChangeStart,
    onClose: onCloseProp,
    onOpen: onOpenProp,
    onSwatchClick,
    ...rest
  } = useFormControlProps(props)
  const { "aria-readonly": _ariaReadonly, ...formControlProps } = pickObject(
    rest,
    formControlProperties,
  )
  const { disabled, readOnly } = formControlProps
  const [containerProps, inputProps] = splitObject(rest, layoutStyleProperties)

  const containerRef = useRef<HTMLDivElement>(null)
  const fieldRef = useRef<HTMLInputElement>(null)

  const { supported: eyeDropperSupported, onOpen: onEyeDropperOpen } =
    useEyeDropper()
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const formatRef = useRef<ColorFormat>(
    format ?? calcFormat(value ?? defaultColor ?? ""),
  )
  const isInputFocused = useRef<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(value ?? "")
  const {
    isOpen,
    onClose: onInternalClose,
    onOpen: onInternalOpen,
  } = useDisclosure({
    defaultIsOpen,
    isOpen: isOpenProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })

  const onOpen = useCallback(() => {
    if (disabled || readOnly) return

    onInternalOpen()
  }, [onInternalOpen, disabled, readOnly])

  const onClose = useCallback(() => {
    if (!isOpen) return

    const next = convertColor(value, fallbackValue)(formatRef.current)

    setValue((prev) => (!next || prev === next ? prev : next))
    setInputValue(formatInput(next ?? ""))

    onInternalClose()
  }, [
    formatRef,
    isOpen,
    setValue,
    onInternalClose,
    value,
    formatInput,
    setInputValue,
    fallbackValue,
  ])

  const onContainerClick = useCallback(() => {
    if (isOpen) return

    onOpen()
  }, [isOpen, onOpen])

  const onInputFocus = useCallback(() => {
    isInputFocused.current = true

    if (isOpen) return

    onOpen()
  }, [isOpen, onOpen])

  const onInputBlur = useCallback(() => {
    isInputFocused.current = false
  }, [])

  const onContainerBlur = useCallback(
    (ev: FocusEvent<HTMLDivElement>) => {
      const relatedTarget = getEventRelatedTarget(ev)

      if (isContains(containerRef.current, relatedTarget)) return

      if (!closeOnBlur) return

      if (isOpen) onClose()
    },
    [closeOnBlur, isOpen, onClose],
  )

  const onInputKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (ev.key === " ") ev.key = ev.code

      if (disabled || readOnly) return

      const actions: { [key: string]: Function | undefined } = {
        Enter: !isOpen ? onOpen : undefined,
        Escape: closeOnEsc ? onClose : undefined,
        Space: !isOpen ? onOpen : undefined,
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()
      action()
    },
    [disabled, readOnly, isOpen, onOpen, closeOnEsc, onClose],
  )

  const onInputChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const value = ev.target.value

      setInputValue(formatInput(value))
      setValue(value)
    },
    [setInputValue, formatInput, setValue],
  )

  const onColorSelectorChange = useCallback(
    (value: string) => {
      setValue(value)

      setTimeout(() => {
        if (!isInputFocused.current) setInputValue(formatInput(value))
      })
    },
    [setValue, formatInput],
  )

  const onEyeDropperClick = useCallback(
    async (ev: MouseEvent<HTMLButtonElement>) => {
      ev.preventDefault()
      ev.stopPropagation()

      try {
        const { sRGBHex } = (await onEyeDropperOpen()) ?? {}

        if (!sRGBHex) return

        onColorSelectorChange(sRGBHex)
        onChangeEnd?.(sRGBHex)
      } catch {}
    },
    [onEyeDropperOpen, onColorSelectorChange, onChangeEnd],
  )

  useOutsideClick({
    ref: containerRef,
    enabled: isOpen && closeOnBlur,
    handler: onClose,
  })

  useUpdateEffect(() => {
    if (!format || !value) return

    formatRef.current = format

    const nextValue = convertColor(value, fallbackValue)(format)

    if (!nextValue) return

    setInputValue(formatInput(nextValue))
    setValue(nextValue)
  }, [format])

  useUpdateEffect(() => {
    if (isInputFocused.current || !valueProp) return

    setInputValue(formatInput(valueProp))
  }, [valueProp])

  const getPopoverProps = useCallback(
    (props?: PopoverProps): PopoverProps => ({
      animation,
      boundary,
      closeDelay,
      closeOnBlur,
      duration,
      eventListeners,
      flip,
      gutter,
      isLazy,
      lazyBehavior,
      matchWidth,
      modifiers,
      offset,
      openDelay,
      placement,
      preventOverflow,
      strategy,
      ...props,
      closeOnButton: false,
      isOpen,
      trigger: "never",
      onClose,
      onOpen,
    }),
    [
      closeOnBlur,
      openDelay,
      closeDelay,
      isLazy,
      lazyBehavior,
      animation,
      duration,
      offset,
      gutter,
      preventOverflow,
      flip,
      matchWidth,
      boundary,
      eventListeners,
      strategy,
      placement,
      modifiers,
      isOpen,
      onOpen,
      onClose,
    ],
  )

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(containerRef, ref),
      ...containerProps,
      ...props,
      ...formControlProps,
      onBlur: handlerAll(props.onBlur, rest.onBlur, onContainerBlur),
      onClick: handlerAll(props.onClick, rest.onClick, onContainerClick),
    }),
    [containerProps, formControlProps, onContainerBlur, onContainerClick, rest],
  )

  const getFieldProps: PropGetter<"input"> = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(fieldRef, ref),
      tabIndex: !allowInput ? -1 : 0,
      ...inputProps,
      ...props,
      style: {
        ...props.style,
        ...(!allowInput ? { pointerEvents: "none" } : {}),
      },
      value: inputValue,
      "aria-expanded": dataAttr(isOpen),
      "data-active": dataAttr(isOpen),
      onBlur: handlerAll(props.onFocus, onInputBlur),
      onChange: handlerAll(props.onChange, onInputChange),
      onFocus: handlerAll(props.onFocus, rest.onFocus, onInputFocus),
      onKeyDown: handlerAll(props.onKeyDown, rest.onKeyDown, onInputKeyDown),
    }),
    [
      allowInput,
      inputProps,
      inputValue,
      isOpen,
      rest,
      onInputFocus,
      onInputKeyDown,
      onInputChange,
      onInputBlur,
    ],
  )

  const getEyeDropperProps: PropGetter<"button"> = useCallback(
    (props = {}, ref = null) => ({
      disabled,
      "aria-label": "Pick a color",
      ...props,
      ref,
      style: { ...props.style, pointerEvents: readOnly ? "none" : undefined },
      onClick: handlerAll(props.onClick, onEyeDropperClick),
    }),
    [disabled, onEyeDropperClick, readOnly],
  )

  const getSelectorProps: PropGetter<ColorSelectorProps> = useCallback(
    (props) => ({
      ...formControlProps,
      ...props,
      colorScheme: colorSelectorColorScheme,
      defaultValue: defaultColor,
      fallbackValue,
      format: formatRef.current,
      size: colorSelectorSize,
      swatches,
      swatchesColumns,
      swatchesLabel,
      value,
      variant: colorSelectorVariant,
      withChannel,
      withEyeDropper: withColorSelectorEyeDropper,
      withPicker,
      withResult,
      onChange: onColorSelectorChange,
      onChangeEnd,
      onChangeStart,
      onSwatchClick: handlerAll(
        onSwatchClick,
        closeOnSelectSwatch ? onClose : undefined,
      ),
    }),
    [
      formControlProps,
      value,
      fallbackValue,
      defaultColor,
      onColorSelectorChange,
      onChangeStart,
      onChangeEnd,
      onSwatchClick,
      onClose,
      closeOnSelectSwatch,
      formatRef,
      withPicker,
      withChannel,
      withResult,
      withColorSelectorEyeDropper,
      swatchesLabel,
      swatches,
      swatchesColumns,
      colorSelectorColorScheme,
      colorSelectorSize,
      colorSelectorVariant,
    ],
  )

  return {
    allowInput,
    eyeDropperSupported,
    value,
    getContainerProps,
    getEyeDropperProps,
    getFieldProps,
    getPopoverProps,
    getSelectorProps,
    onClose,
  }
}

export type UseColorPickerReturn = ReturnType<typeof useColorPicker>
