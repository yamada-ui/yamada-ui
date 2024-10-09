import type {
  HTMLProps,
  HTMLUIProps,
  PropGetter,
  RequiredPropGetter,
  ThemeProps,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { ComboBoxProps, PopoverProps } from "@yamada-ui/popover"
import type {
  CSSProperties,
  FocusEvent,
  FocusEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
} from "react"
import type { CalendarBaseProps, CalendarProps } from "./calendar"
import type { UseCalendarProps } from "./use-calendar"
import { layoutStyleProperties, useTheme } from "@yamada-ui/core"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import { useOutsideClick } from "@yamada-ui/use-outside-click"
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
import { useCallback, useId, useRef } from "react"
import { isAfterDate, isBeforeDate } from "./calendar-utils"

interface CalendarThemeProps extends ThemeProps<"Calendar"> {}

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
> = Omit<
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
> &
  UseCalendarPickerBaseProps<T>

export const useCalendarPicker = <T extends UseCalendarProps<any>>(
  props: UseCalendarPickerProps<T>,
) => {
  const { theme } = useTheme()

  let {
    id,
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
    defaultIsOpen,
    defaultMonth,
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
    isLazy,
    isOpen: isOpenProp,
    lazyBehavior,
    locale,
    matchWidth,
    maxDate,
    maxSelectValues,
    minDate,
    minSelectValues,
    modifiers,
    month,
    monthFormat,
    offset,
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

  const uuid = useId()

  id ??= uuid
  locale ??= theme.__config?.date?.locale ?? "en"

  const { "aria-readonly": _ariaReadonly, ...formControlProps } = pickObject(
    rest,
    formControlProperties,
  )
  const [containerProps, inputProps] = splitObject(rest, layoutStyleProperties)
  const { disabled, readOnly } = formControlProps

  const {
    isOpen,
    onClose,
    onOpen: onInternalOpen,
  } = useDisclosure({
    defaultIsOpen,
    isOpen: isOpenProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

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

      const actions: {
        [key: string]: KeyboardEventHandler<HTMLDivElement> | undefined
      } = {
        Backspace: onDelete,
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
        Space: !isOpen
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
    enabled: isOpen && closeOnBlur,
    handler: onClose,
  })

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(containerRef, ref),
      ...containerProps,
      ...props,
      ...formControlProps,
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
      closeOnBlur: false,
      closeOnButton: false,
      isOpen,
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

  const getFieldProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        ...props.style,
        ...(!allowInput ? { cursor: "pointer" } : {}),
      }

      return {
        ref: mergeRefs(inputRef, ref),
        "aria-controls": id,
        "aria-haspopup": "dialog",
        role: "combobox",
        tabIndex: !allowInput ? 0 : -1,
        ...props,
        ...formControlProps,
        style,
        "aria-expanded": isOpen,
        "data-active": dataAttr(isOpen),
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
    id,
    allowInput,
    containerRef,
    dateToString,
    inputRef,
    isOpen,
    pattern,
    stringToDate,
    formControlProps,
    getCalendarProps,
    getContainerProps,
    getFieldProps,
    getIconProps,
    getPopoverProps,
    inputProps,
    onClose,
    onOpen,
  }
}

export type UseCalendarPickerReturn = ReturnType<typeof useCalendarPicker>
