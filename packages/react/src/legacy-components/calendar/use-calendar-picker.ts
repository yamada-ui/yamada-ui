import type {
  FocusEvent,
  FocusEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
} from "react"
import type { FormControlOptions } from "../../components/form-control"
import type { ComboBoxProps, PopoverProps } from "../../components/popover"
import type {
  HTMLProps,
  HTMLUIProps,
  PropGetter,
  RequiredPropGetter,
  ThemeProps,
} from "../../core"
import type { CalendarBaseProps, CalendarProps } from "./calendar"
import type { UseCalendarProps } from "./use-calendar"
import dayjs from "dayjs"
import { useCallback, useRef } from "react"
import {
  formControlProperties,
  useFormControlProps,
} from "../../components/form-control"
import { layoutStyleProperties } from "../../core"
import { useDisclosure } from "../../hooks/use-disclosure"
import { useOutsideClick } from "../../hooks/use-outside-click"
import { useI18n } from "../../providers/i18n-provider"
import { useTheme } from "../../providers/theme-provider"
import {
  dataAttr,
  getEventRelatedTarget,
  handlerAll,
  isContains,
  mergeRefs,
  pickObject,
  splitObject,
} from "../../utils"
import { isAfterDate, isBeforeDate } from "./calendar-utils"

interface CalendarThemeProps extends ThemeProps<"Calendar"> {}

interface InputProps
  extends Omit<
    HTMLUIProps<"input">,
    | "children"
    | "defaultValue"
    | "disabled"
    | "onChange"
    | "readOnly"
    | "required"
    | "size"
    | "type"
    | keyof UseCalendarPickerBaseProps
  > {}

interface UseCalendarPickerOptions {
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
   * If `true`, focus will be transferred to the input element when the popover opens and container or clear icon clicked.
   *
   * @private
   * @default true
   */
  autoFocus?: boolean
  /**
   * ColorScheme for the calendar component.
   */
  calendarColorScheme?: CalendarThemeProps["colorScheme"]
  /**
   * Size for the calendar component.
   */
  calendarSize?: CalendarThemeProps["size"]
  /**
   * Variant for the calendar component.
   */
  calendarVariant?: CalendarThemeProps["variant"]
  /**
   * The format used for conversion.
   * Check the docs to see the format of possible modifiers you can pass.
   *
   * @see Docs https://day.js.org/docs/en/display/format#list-of-localized-formats
   * @default 'YYYY/MM/DD'
   */
  inputFormat?: string
  /**
   * Function that converts the input value to Date type.
   */
  parseDate?: (value: string) => Date | undefined
  /**
   * The pattern used to check the input element.
   *
   * @default '/[^0-9\-\/]/g'
   */
  pattern?: RegExp
  /**
   * Props for calendar component.
   */
  calendarProps?: CalendarBaseProps
  /**
   * The callback invoked when date picker clear icon clicked.
   *
   * @private
   */
  onClear?: () => void
  /**
   * The callback invoked when you hit the `Backspace` key.
   *
   * @private
   */
  onDelete?: (ev: KeyboardEvent<HTMLDivElement>) => void
  /**
   * The callback invoked when you hit the `Enter` key.
   *
   * @private
   */
  onEnter?: (ev: KeyboardEvent<HTMLDivElement>) => void
}

type UseCalendarPickerBaseProps<
  T extends UseCalendarProps<any> = UseCalendarProps<any>,
> = ComboBoxProps & FormControlOptions & T & UseCalendarPickerOptions

export type UseCalendarPickerProps<
  T extends UseCalendarProps<any> = UseCalendarProps<any>,
> = InputProps & UseCalendarPickerBaseProps<T>

export const useCalendarPicker = <T extends UseCalendarProps<any>>(
  props: UseCalendarPickerProps<T>,
) => {
  const { locale: defaultLocale } = useI18n()
  const { theme } = useTheme()
  const themeLocale = theme.__config?.date?.locale
  const {
    type,
    allowInput = true,
    allowInputBeyond = false,
    amountOfMonths,
    animation,
    autoFocus = true,
    boundary,
    calendarColorScheme,
    calendarSize,
    calendarVariant,
    closeDelay,
    closeOnBlur = true,
    closeOnEsc = true,
    dateFormat,
    defaultMonth,
    defaultOpen,
    defaultType,
    defaultValue,
    disableOutsideDays,
    duration = 0.2,
    enableMultiple,
    enableRange,
    eventListeners,
    excludeDate,
    firstDayOfWeek,
    flip,
    gutter,
    hiddenOutsideDays,
    holidays,
    inputFormat = "YYYY/MM/DD",
    lazy,
    lazyBehavior,
    locale = themeLocale ?? defaultLocale,
    matchWidth,
    maxDate,
    maxSelectValues,
    minDate,
    minSelectValues,
    modifiers,
    month,
    monthFormat,
    offset,
    open: openProp,
    openDelay,
    paginateBy,
    parseDate,
    pattern = /[^0-9\-\/]/g,
    placement = "bottom-start",
    preventOverflow,
    strategy,
    today,
    value,
    weekdayFormat,
    weekendDays,
    withControls,
    withHeader,
    withLabel,
    withWeekdays,
    yearFormat,
    calendarProps,
    onChange,
    onChangeMonth,
    onChangeType,
    onClear: onClearProp,
    onClose: onCloseProp,
    onDelete,
    onEnter,
    onOpen: onOpenProp,
    __selectType,
    ...rest
  } = useFormControlProps(props)
  const { "aria-readonly": _ariaReadonly, ...formControlProps } = pickObject(
    rest,
    formControlProperties,
  )
  const [containerProps, inputProps] = splitObject(rest, layoutStyleProperties)
  const {
    open,
    onClose,
    onOpen: onInternalOpen,
  } = useDisclosure({
    defaultOpen,
    open: openProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { disabled, readOnly } = formControlProps

  const stringToDate = useCallback(
    (value: string): Date | undefined => {
      let date = parseDate?.(value)

      if (!date && dayjs(value).isValid())
        date = dayjs(value, inputFormat, locale).toDate()

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

      return dayjs(value).locale(locale).format(inputFormat)
    },
    [allowInputBeyond, excludeDate, inputFormat, locale, maxDate, minDate],
  )

  const onOpen = useCallback(() => {
    if (disabled || readOnly) return

    onInternalOpen()

    if (autoFocus && allowInput) inputRef.current?.focus()
  }, [autoFocus, allowInput, disabled, readOnly, onInternalOpen])

  const onClick = useCallback(() => {
    if (open) {
      if (autoFocus && allowInput) inputRef.current?.focus()
    } else {
      onOpen()
    }
  }, [autoFocus, allowInput, open, onOpen])

  const onFocus = useCallback(() => {
    if (!open) onOpen()
  }, [open, onOpen])

  const onBlur = useCallback(
    (ev: FocusEvent<HTMLDivElement>) => {
      const relatedTarget = getEventRelatedTarget(ev)

      if (isContains(containerRef.current, relatedTarget)) return

      if (!closeOnBlur) return

      if (open) onClose()
    },
    [closeOnBlur, open, onClose],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      if (ev.key === " ") ev.key = ev.code

      if (disabled || readOnly) return

      const actions: {
        [key: string]: KeyboardEventHandler<HTMLDivElement> | undefined
      } = {
        Backspace: onDelete,
        Enter: !open
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
        Space: !open
          ? (ev) => {
              ev.preventDefault()
              ev.stopPropagation()

              onOpen()
            }
          : undefined,
      }

      const action = actions[ev.key]

      if (!action) return

      action(ev)
    },
    [closeOnEsc, disabled, readOnly, open, onClose, onEnter, onDelete, onOpen],
  )

  const onClear = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      ev.stopPropagation()

      onClearProp?.()

      if (autoFocus && allowInput && open) inputRef.current?.focus()
    },
    [autoFocus, allowInput, open, onClearProp],
  )

  useOutsideClick({
    ref: containerRef,
    enabled: open && closeOnBlur,
    handler: onClose,
  })

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(containerRef, ref),
      ...containerProps,
      ...formControlProps,
      ...props,
      onBlur: handlerAll(
        props.onBlur,
        rest.onBlur as FocusEventHandler<HTMLDivElement>,
        onBlur,
      ),
      onClick: handlerAll(props.onClick, rest.onClick, onClick),
    }),
    [containerProps, formControlProps, onBlur, onClick, rest],
  )

  const getPopoverProps = useCallback(
    (props?: PopoverProps): PopoverProps => ({
      animation,
      boundary,
      closeDelay,
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
      closeOnBlur: false,
      closeOnButton: false,
      open,
      trigger: "never",
      onClose,
      onOpen,
    }),
    [
      animation,
      boundary,
      closeDelay,
      duration,
      eventListeners,
      flip,
      gutter,
      open,
      lazy,
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

  const getFieldProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      return {
        "aria-haspopup": "dialog",
        "data-active": dataAttr(open),
        "data-not-allowed": dataAttr(!readOnly && !disabled && !allowInput),
        role: "combobox",
        tabIndex: -1,
        ...formControlProps,
        ...props,
        ref: mergeRefs(inputRef, ref),
        onFocus: handlerAll(props.onFocus, rest.onFocus, onFocus),
        onKeyDown: handlerAll(
          props.onKeyDown,
          rest.onKeyDown as KeyboardEventHandler<HTMLDivElement>,
          onKeyDown,
        ),
      }
    },
    [
      allowInput,
      disabled,
      readOnly,
      formControlProps,
      open,
      rest,
      onFocus,
      onKeyDown,
    ],
  )

  const getCalendarProps = useCallback(
    (props?: CalendarProps): CalendarProps => ({
      ...props,
      type,
      colorScheme: calendarColorScheme,
      size: calendarSize,
      variant: calendarVariant,
      amountOfMonths,
      dateFormat,
      defaultMonth,
      defaultType,
      disableOutsideDays,
      firstDayOfWeek,
      hiddenOutsideDays,
      holidays,
      maxSelectValues,
      minSelectValues,
      month,
      monthFormat,
      paginateBy,
      today,
      weekdayFormat,
      weekendDays,
      withControls,
      withHeader,
      withLabel,
      withWeekdays,
      yearFormat,
      onChangeMonth,
      onChangeType,
      ...calendarProps,
      defaultValue,
      enableMultiple,
      enableRange,
      excludeDate,
      locale,
      maxDate,
      minDate,
      value,
      onChange,
      __selectType,
    }),
    [
      hiddenOutsideDays,
      maxSelectValues,
      minSelectValues,
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

  const getIconProps: RequiredPropGetter<
    { clear: boolean } & HTMLProps,
    HTMLProps
  > = useCallback(
    ({ clear, ...props }) => ({
      ...props,
      ...formControlProps,
      onClick: handlerAll(props.onClick, clear ? onClear : undefined),
    }),
    [formControlProps, onClear],
  )

  return {
    allowInput,
    containerRef,
    dateToString,
    inputFormat,
    inputRef,
    locale,
    open,
    pattern,
    stringToDate,
    formControlProps,
    getCalendarProps,
    getContainerProps,
    getFieldProps,
    getIconProps,
    getPopoverProps,
    inputProps: inputProps as InputProps,
    onClose,
    onOpen,
  }
}

export type UseCalendarPickerReturn = ReturnType<typeof useCalendarPicker>
