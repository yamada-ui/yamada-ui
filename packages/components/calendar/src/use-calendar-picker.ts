import { layoutStyleProperties, useTheme } from "@yamada-ui/core"
import type {
  UIPropGetter,
  HTMLUIProps,
  ThemeProps,
  RequiredUIPropGetter,
} from "@yamada-ui/core"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import type {
  UseFormControlProps,
  FormControlOptions,
} from "@yamada-ui/form-control"
import type { ComboBoxProps, PopoverProps } from "@yamada-ui/popover"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import { useOutsideClick } from "@yamada-ui/use-outside-click"
import type { DOMAttributes } from "@yamada-ui/utils"
import {
  dataAttr,
  getEventRelatedTarget,
  handlerAll,
  isContains,
  mergeRefs,
  pickObject,
  splitObject,
} from "@yamada-ui/utils"
import dayjs from "dayjs"
import type {
  CSSProperties,
  FocusEvent,
  FocusEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
} from "react"
import { useCallback, useId, useRef } from "react"
import type { CalendarBaseProps, CalendarProps } from "./calendar"
import { isAfterDate, isBeforeDate } from "./calendar-utils"
import type { UseCalendarProps } from "./use-calendar"

type CalendarThemeProps = ThemeProps<"Calendar">

type UseCalendarPickerOptions = {
  /**
   * The pattern used to check the input element.
   *
   * @default '/[^0-9\-\/]/g'
   */
  pattern?: RegExp
  /**
   * Function that converts the input value to Date type.
   */
  parseDate?: (value: string) => Date | undefined
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Docs https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'YYYY/MM/DD'
   */
  inputFormat?: string
  /**
   * If `true`, allows input.
   *
   * @default true
   */
  allowInput?: boolean
  /**
   * If `true`, allows input of dates beyond the `minDate` and `maxDate` restrictions.
   *
   * @default true
   */
  allowInputBeyond?: boolean
  /**
   * Variant for the calendar component.
   */
  calendarVariant?: CalendarThemeProps["variant"]
  /**
   * Size for the calendar component.
   */
  calendarSize?: CalendarThemeProps["size"]
  /**
   * ColorScheme for the calendar component.
   */
  calendarColorScheme?: CalendarThemeProps["colorScheme"]
  /**
   * Props for calendar component.
   */
  calendarProps?: CalendarBaseProps
  /**
   * If `true`, focus will be transferred to the input element when the popover opens and container or clear icon clicked.
   *
   * @private
   * @default true
   */
  autoFocus?: boolean
  /**
   * The callback invoked when date picker clear icon clicked.
   *
   * @private
   */
  onClear?: () => void
  /**
   * The callback invoked when you hit the `Enter` key.
   *
   * @private
   */
  onEnter?: (ev: KeyboardEvent<HTMLDivElement>) => void
  /**
   * The callback invoked when you hit the `Backspace` key.
   *
   * @private
   */
  onDelete?: (ev: KeyboardEvent<HTMLDivElement>) => void
}

type UseCalendarPickerBaseProps<
  T extends UseCalendarProps<any> = UseCalendarProps<any>,
> = ComboBoxProps & FormControlOptions & T & UseCalendarPickerOptions

export type UseCalendarPickerProps<
  T extends UseCalendarProps<any> = UseCalendarProps<any>,
> = Omit<
  HTMLUIProps<"input">,
  | keyof UseCalendarPickerBaseProps
  | "disabled"
  | "required"
  | "readOnly"
  | "size"
  | "type"
  | "defaultValue"
  | "onChange"
  | "children"
> &
  UseCalendarPickerBaseProps<T>

export const useCalendarPicker = <T extends UseCalendarProps<any>>(
  props: UseCalendarPickerProps<T>,
) => {
  const { theme } = useTheme()

  let {
    id,
    enableMultiple,
    enableRange,
    value,
    defaultValue,
    onChange,
    type,
    defaultType,
    onChangeType,
    month,
    defaultMonth,
    onChangeMonth,
    firstDayOfWeek,
    amountOfMonths,
    paginateBy,
    withWeekdays,
    disableOutsideDays,
    hiddenOutsideDays,
    minDate,
    maxDate,
    locale,
    yearFormat,
    monthFormat,
    weekdayFormat,
    dateFormat,
    weekendDays,
    today,
    excludeDate,
    calendarVariant,
    calendarSize,
    calendarColorScheme,
    holidays,
    withHeader,
    withControls,
    withLabel,
    maxSelectValues,
    __selectType,
    calendarProps,
    allowInput = true,
    allowInputBeyond = false,
    parseDate,
    pattern = /[^0-9\-\/]/g,
    inputFormat = "YYYY/MM/DD",
    autoFocus = true,
    onClear: onClearProp,
    isOpen: isOpenProp,
    defaultIsOpen,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    closeOnBlur = true,
    closeOnEsc = true,
    openDelay,
    closeDelay,
    isLazy,
    lazyBehavior,
    animation,
    duration = 0.2,
    offset,
    gutter,
    preventOverflow,
    flip,
    matchWidth,
    boundary,
    eventListeners,
    strategy,
    placement = "bottom-start",
    modifiers,
    onEnter,
    onDelete,
    ...rest
  } = useFormControlProps(props)

  id ??= useId()
  locale ??= theme.__config?.date?.locale ?? "en"

  const { "aria-readonly": _ariaReadonly, ...formControlProps } = pickObject(
    rest,
    formControlProperties,
  )
  const [containerProps, inputProps] = splitObject(rest, layoutStyleProperties)
  const { disabled, readOnly } = formControlProps

  const {
    isOpen,
    onOpen: onInternalOpen,
    onClose,
  } = useDisclosure({
    isOpen: isOpenProp,
    defaultIsOpen,
    onOpen: onOpenProp,
    onClose: onCloseProp,
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const stringToDate = useCallback(
    (value: string): Date | undefined => {
      let date =
        parseDate?.(value) ?? dayjs(value, inputFormat, locale).toDate()

      if (date == null) return undefined
      if (excludeDate?.(date)) return undefined

      if (!allowInputBeyond) {
        if (maxDate && isAfterDate(date, maxDate)) date = maxDate
        if (minDate && isBeforeDate(date, minDate)) date = minDate
      }

      return date
    },
    [
      allowInputBeyond,
      excludeDate,
      inputFormat,
      locale,
      maxDate,
      minDate,
      parseDate,
    ],
  )

  const dateToString = useCallback(
    (value: Date | undefined): string | undefined => {
      if (value == null) return undefined
      if (excludeDate?.(value)) return undefined

      if (!allowInputBeyond) {
        if (maxDate && isAfterDate(value, maxDate)) value = maxDate
        if (minDate && isBeforeDate(value, minDate)) value = minDate
      }

      return dayjs(value)
        .locale(locale ?? "en")
        .format(inputFormat)
    },
    [allowInputBeyond, excludeDate, inputFormat, locale, maxDate, minDate],
  )

  const onOpen = useCallback(() => {
    if (disabled || readOnly) return

    onInternalOpen()

    if (autoFocus && allowInput) inputRef.current?.focus()
  }, [autoFocus, allowInput, disabled, readOnly, onInternalOpen])

  const onClick = useCallback(() => {
    if (isOpen) {
      if (autoFocus && allowInput) inputRef.current?.focus()
    } else {
      onOpen()
    }
  }, [autoFocus, allowInput, isOpen, onOpen])

  const onFocus = useCallback(() => {
    if (!isOpen) onOpen()
  }, [isOpen, onOpen])

  const onBlur = useCallback(
    (ev: FocusEvent<HTMLDivElement>) => {
      const relatedTarget = getEventRelatedTarget(ev)

      if (isContains(containerRef.current, relatedTarget)) return

      if (!closeOnBlur) return

      if (isOpen) onClose()
    },
    [closeOnBlur, isOpen, onClose],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      if (ev.key === " ") ev.key = ev.code

      if (disabled || readOnly) return

      const actions: Record<
        string,
        KeyboardEventHandler<HTMLDivElement> | undefined
      > = {
        Space: !isOpen
          ? (ev) => {
              ev.preventDefault()
              ev.stopPropagation()

              onOpen()
            }
          : undefined,
        Enter: !isOpen
          ? (ev) => {
              ev.preventDefault()
              ev.stopPropagation()

              onOpen()
            }
          : onEnter,
        Escape: closeOnEsc
          ? (ev) => {
              ev.preventDefault()
              ev.stopPropagation()

              onClose()
            }
          : undefined,
        Backspace: onDelete,
      }

      const action = actions[ev.key]

      if (!action) return

      action(ev)
    },
    [
      closeOnEsc,
      disabled,
      readOnly,
      isOpen,
      onClose,
      onEnter,
      onDelete,
      onOpen,
    ],
  )

  const onClear = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      ev.stopPropagation()

      onClearProp?.()

      if (autoFocus && allowInput && isOpen) inputRef.current?.focus()
    },
    [autoFocus, allowInput, isOpen, onClearProp],
  )

  useOutsideClick({
    ref: containerRef,
    handler: onClose,
    enabled: isOpen && closeOnBlur,
  })

  const getContainerProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(containerRef, ref),
      ...containerProps,
      ...props,
      ...formControlProps,
      onClick: handlerAll(props.onClick, rest.onClick, onClick),
      onBlur: handlerAll(
        props.onBlur,
        rest.onBlur as FocusEventHandler<HTMLDivElement>,
        onBlur,
      ),
    }),
    [containerProps, formControlProps, onBlur, onClick, rest],
  )

  const getPopoverProps = useCallback(
    (props?: PopoverProps): PopoverProps => ({
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
      ...props,
      isOpen,
      onOpen,
      onClose,
      trigger: "never",
      closeOnButton: false,
      closeOnBlur: false,
    }),
    [
      animation,
      boundary,
      closeDelay,
      duration,
      eventListeners,
      flip,
      gutter,
      isLazy,
      isOpen,
      lazyBehavior,
      matchWidth,
      modifiers,
      offset,
      onClose,
      onOpen,
      openDelay,
      placement,
      preventOverflow,
      strategy,
    ],
  )

  const getFieldProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        ...props.style,
        ...(!allowInput ? { cursor: "pointer" } : {}),
      }

      return {
        ref: mergeRefs(inputRef, ref),
        tabIndex: !allowInput ? 0 : -1,
        role: "combobox",
        "aria-haspopup": "dialog",
        "aria-controls": id,
        ...props,
        ...formControlProps,
        style,
        "data-active": dataAttr(isOpen),
        "aria-expanded": isOpen,
        onFocus: handlerAll(props.onFocus, rest.onFocus, onFocus),
        onKeyDown: handlerAll(
          props.onKeyDown,
          rest.onKeyDown as KeyboardEventHandler<HTMLDivElement>,
          onKeyDown,
        ),
      }
    },
    [id, allowInput, formControlProps, isOpen, rest, onFocus, onKeyDown],
  )

  const getCalendarProps = useCallback(
    (props?: CalendarProps): CalendarProps => ({
      ...props,
      type,
      defaultType,
      onChangeType,
      month,
      defaultMonth,
      onChangeMonth,
      firstDayOfWeek,
      amountOfMonths,
      paginateBy,
      withWeekdays,
      disableOutsideDays,
      hiddenOutsideDays,
      yearFormat,
      monthFormat,
      weekdayFormat,
      dateFormat,
      weekendDays,
      today,
      holidays,
      withHeader,
      withControls,
      withLabel,
      maxSelectValues,
      variant: calendarVariant,
      size: calendarSize,
      colorScheme: calendarColorScheme,
      ...calendarProps,
      value,
      defaultValue,
      onChange,
      minDate,
      maxDate,
      excludeDate,
      locale,
      __selectType,
      enableMultiple,
      enableRange,
    }),
    [
      hiddenOutsideDays,
      maxSelectValues,
      enableMultiple,
      enableRange,
      amountOfMonths,
      calendarColorScheme,
      calendarProps,
      calendarSize,
      calendarVariant,
      dateFormat,
      defaultMonth,
      defaultType,
      defaultValue,
      disableOutsideDays,
      excludeDate,
      firstDayOfWeek,
      holidays,
      locale,
      maxDate,
      minDate,
      month,
      monthFormat,
      onChange,
      onChangeMonth,
      onChangeType,
      paginateBy,
      today,
      type,
      value,
      weekdayFormat,
      weekendDays,
      withControls,
      withHeader,
      withLabel,
      withWeekdays,
      yearFormat,
      __selectType,
    ],
  )

  const getIconProps: RequiredUIPropGetter<"div", { clear: boolean }> =
    useCallback(
      ({ clear, ...props }) => ({
        ...props,
        ...formControlProps,
        onClick: handlerAll(props.onClick, clear ? onClear : undefined),
      }),
      [formControlProps, onClear],
    )

  return {
    id,
    allowInput,
    pattern,
    inputProps: inputProps as DOMAttributes<HTMLInputElement>,
    formControlProps: formControlProps as UseFormControlProps<HTMLInputElement>,
    containerRef,
    inputRef,
    isOpen,
    onOpen,
    onClose,
    dateToString,
    stringToDate,
    getContainerProps,
    getPopoverProps,
    getFieldProps,
    getCalendarProps,
    getIconProps,
  } as any
}

export type UseCalendarPickerReturn = ReturnType<typeof useCalendarPicker>
