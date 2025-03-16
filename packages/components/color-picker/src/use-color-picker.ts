import type {
  CSSUIObject,
  HTMLUIProps,
  PropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import type { ComboBoxProps, PopoverProps } from "@yamada-ui/popover"
import type { ColorFormat } from "@yamada-ui/utils"
import type {
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
} from "react"
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
  styles: { [key: string]: CSSUIObject | undefined }
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
    defaultOpen,
    defaultValue,
    duration = 0.2,
    eventListeners,
    fallbackValue,
    flip,
    format,
    formatInput = defaultFormatInput,
    gutter,
    isLazy,
    isOpen: isOpen,
    lazy = isLazy,
    lazyBehavior,
    matchWidth = colorSelectorSize === "full",
    modifiers,
    offset,
    open: openProp,
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
    onClick,
    onClose: onCloseProp,
    onKeyDown,
    onOpen: onOpenProp,
    onSwatchClick,
    ...rest
  } = useFormControlProps(props)
  const {
    "aria-readonly": _ariaReadonly,
    onBlur,
    onFocus,
    ...formControlProps
  } = pickObject(rest, formControlProperties)
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
    format ?? calcFormat(value || defaultColor || ""),
  )
  const inputFocused = useRef<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(value || "")
  const {
    open,
    onClose: onInternalClose,
    onOpen: onInternalOpen,
  } = useDisclosure({
    defaultIsOpen,
    defaultOpen,
    isOpen,
    open: openProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })

  const onOpen = useCallback(() => {
    if (disabled || readOnly) return

    onInternalOpen()
  }, [onInternalOpen, disabled, readOnly])

  const onClose = useCallback(() => {
    if (!open) return

    const next = convertColor(value, fallbackValue)(formatRef.current)

    setValue((prev) => (!next || prev === next ? prev : next))
    setInputValue(formatInput(next ?? ""))

    onInternalClose()
  }, [
    formatRef,
    open,
    setValue,
    onInternalClose,
    value,
    formatInput,
    setInputValue,
    fallbackValue,
  ])

  const onContainerClick = useCallback(() => {
    if (open) return

    onOpen()
  }, [open, onOpen])

  const onInputFocus = useCallback(() => {
    inputFocused.current = true

    if (open) return

    onOpen()
  }, [open, onOpen])

  const onInputBlur = useCallback(() => {
    inputFocused.current = false
  }, [])

  const onContainerBlur = useCallback(
    (ev: FocusEvent<HTMLDivElement>) => {
      const relatedTarget = getEventRelatedTarget(ev)

      if (isContains(containerRef.current, relatedTarget)) return

      if (!closeOnBlur) return

      if (open) onClose()
    },
    [closeOnBlur, open, onClose],
  )

  const onInputKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLInputElement>) => {
      if (ev.key === " ") ev.key = ev.code

      if (disabled || readOnly) return

      const actions: { [key: string]: Function | undefined } = {
        Enter: !open ? onOpen : undefined,
        Escape: closeOnEsc ? onClose : undefined,
        Space: !open ? onOpen : undefined,
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()
      action()
    },
    [disabled, readOnly, open, onOpen, closeOnEsc, onClose],
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
        if (!inputFocused.current) setInputValue(formatInput(value))
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
    enabled: open && closeOnBlur,
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
    if (inputFocused.current || !valueProp) return

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
      lazy,
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
      open,
      trigger: "never",
      onClose,
      onOpen,
    }),
    [
      closeOnBlur,
      openDelay,
      closeDelay,
      lazy,
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
      open,
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
      onBlur: handlerAll(props.onBlur, onBlur, onContainerBlur),
      onClick: handlerAll(props.onClick, onClick, onContainerClick),
    }),
    [
      containerProps,
      formControlProps,
      onBlur,
      onClick,
      onContainerBlur,
      onContainerClick,
    ],
  )

  const getFieldProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      "aria-haspopup": "dialog",
      "data-active": dataAttr(open),
      "data-not-allowed": dataAttr(!readOnly && !disabled && !allowInput),
      role: "combobox",
      tabIndex: -1,
      ...formControlProps,
      ...props,
      ref: mergeRefs(fieldRef, ref),
      onBlur: handlerAll(props.onFocus, onInputBlur),
      onFocus: handlerAll(props.onFocus, onFocus, onInputFocus),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDown, onInputKeyDown),
    }),
    [
      allowInput,
      formControlProps,
      open,
      readOnly,
      disabled,
      onInputBlur,
      onFocus,
      onInputFocus,
      onKeyDown,
      onInputKeyDown,
    ],
  )

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        ...props.style,
        ...inputProps.style,
        ...(disabled || !allowInput ? { pointerEvents: "none" } : {}),
      }

      return {
        autoComplete: "off",
        tabIndex: !allowInput ? -1 : 0,
        ...formControlProps,
        ...inputProps,
        ...props,
        ref,
        style,
        value: inputValue,
        onChange: handlerAll(props.onChange, onInputChange),
      }
    },
    [
      inputProps,
      allowInput,
      disabled,
      formControlProps,
      inputValue,
      onInputChange,
    ],
  )

  const getEyeDropperProps: PropGetter<"button"> = useCallback(
    (props = {}, ref = null) => ({
      "aria-label": "Pick a color",
      disabled,
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
      size: colorSelectorSize,
      variant: colorSelectorVariant,
      defaultValue: defaultColor,
      fallbackValue,
      format: formatRef.current,
      swatches,
      swatchesColumns,
      swatchesLabel,
      value,
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
    getInputProps,
    getPopoverProps,
    getSelectorProps,
    onClose,
  }
}

export type UseColorPickerReturn = ReturnType<typeof useColorPicker>
