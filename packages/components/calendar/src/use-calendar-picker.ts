import { layoutStyleProperties, useTheme } from "@yamada-ui/core"
import type {
  UIPropGetter,
  HTMLUIProps,
  ThemeProps,
  RequiredUIPropGetter,
} from "@yamada-ui/core"
import {
  useFormControlProps,
  type FormControlOptions,
  formControlProperties,
} from "@yamada-ui/form-control"
import { popoverProperties, type PopoverProps } from "@yamada-ui/popover"
import { useOutsideClick } from "@yamada-ui/use-outside-click"
import type { Dict } from "@yamada-ui/utils"
import {
  dataAttr,
  getEventRelatedTarget,
  handlerAll,
  isContains,
  mergeRefs,
  omitObject,
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
} from "react"
import { useCallback, useRef, useState } from "react"
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
}

type UseCalendarPickerBaseProps<
  T extends UseCalendarProps<any> = UseCalendarProps<any>,
> = Omit<
  PopoverProps,
  | "initialFocusRef"
  | "closeOnButton"
  | "isOpen"
  | "trigger"
  | "autoFocus"
  | "restoreFocus"
  | "openDelay"
  | "closeDelay"
> &
  FormControlOptions &
  T &
  UseCalendarPickerOptions

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
> &
  UseCalendarPickerBaseProps<T>

export const useCalendarPicker = <T extends UseCalendarProps<any>>(
  props: UseCalendarPickerProps<T> & { onClear?: () => void },
) => {
  const { theme } = useTheme()

  let {
    id,
    defaultIsOpen,
    closeOnBlur = true,
    closeOnEsc = true,
    placement = "bottom-start",
    duration = 0.2,
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
    selectMonthWith,
    calendarProps,
    allowInput = true,
    allowInputBeyond = false,
    parseDate,
    pattern = /[^0-9\-\/]/g,
    inputFormat = "YYYY/MM/DD",
    onOpen: onOpenProp,
    onClose: onCloseProp,
    onClear,
    ...rest
  } = useFormControlProps(props)

  locale ??= theme.__config.date?.locale ?? "en"

  const formControlProps = pickObject(rest, formControlProperties)
  const [containerProps, inputProps] = splitObject<Dict, string>(
    omitObject(rest, [...popoverProperties]),
    layoutStyleProperties,
  )
  const { disabled, readOnly } = formControlProps

  const [isOpen, setIsOpen] = useState<boolean>(defaultIsOpen ?? false)

  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const stringToDate = useCallback(
    (value: string): Date | undefined => {
      let date =
        parseDate?.(value) ?? dayjs(value, inputFormat, locale).toDate()

      if (date == null) return undefined

      if (!allowInputBeyond) {
        if (maxDate && isAfterDate(date, maxDate)) date = maxDate
        if (minDate && isBeforeDate(date, minDate)) date = minDate
      }

      return date
    },
    [allowInputBeyond, inputFormat, locale, maxDate, minDate, parseDate],
  )

  const dateToString = useCallback(
    (value: Date | undefined): string | undefined => {
      if (value == null) return undefined

      if (!allowInputBeyond) {
        if (maxDate && isAfterDate(value, maxDate)) value = maxDate
        if (minDate && isBeforeDate(value, minDate)) value = minDate
      }

      return dayjs(value)
        .locale(locale ?? "en")
        .format(inputFormat)
    },
    [allowInputBeyond, inputFormat, locale, maxDate, minDate],
  )

  const onOpen = useCallback(() => {
    if (disabled || readOnly) return

    setIsOpen(true)

    if (allowInput && inputRef.current) inputRef.current.focus()

    onOpenProp?.()
  }, [allowInput, disabled, readOnly, onOpenProp])

  const onClose = useCallback(() => {
    setIsOpen(false)

    onCloseProp?.()
  }, [onCloseProp])

  const onClick = useCallback(() => {
    if (isOpen) {
      if (allowInput && inputRef.current) inputRef.current.focus()
    } else {
      onOpen()
    }
  }, [allowInput, isOpen, onOpen])

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

      const actions: Record<string, Function | undefined> = {
        Space: isOpen ? onClose : onOpen,
        Enter: isOpen ? onClose : onOpen,
        Escape: closeOnEsc ? onClose : undefined,
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()

      action(ev)
    },
    [closeOnEsc, disabled, readOnly, isOpen, onClose, onOpen],
  )

  useOutsideClick({
    ref: containerRef,
    handler: onClose,
    enabled: closeOnBlur,
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
      ...rest,
      ...props,
      isOpen,
      onOpen,
      onClose,
      placement,
      duration,
      trigger: "never",
      closeOnButton: false,
    }),
    [duration, isOpen, onClose, onOpen, placement, rest],
  )

  const getFieldProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        ...props.style,
        ...(!allowInput ? { cursor: "pointer" } : {}),
      }

      return {
        ref: mergeRefs(ref, inputRef),
        tabIndex: !allowInput ? 0 : -1,
        ...props,
        ...formControlProps,
        style,
        "data-active": dataAttr(isOpen),
        "aria-expanded": dataAttr(isOpen),
        onFocus: handlerAll(props.onFocus, rest.onFocus, onFocus),
        onKeyDown: handlerAll(
          props.onKeyDown,
          rest.onKeyDown as KeyboardEventHandler<HTMLDivElement>,
          onKeyDown,
        ),
      }
    },
    [allowInput, formControlProps, isOpen, rest, onFocus, onKeyDown],
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
      selectMonthWith,
    }),
    [
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
      selectMonthWith,
    ],
  )

  const getIconProps: RequiredUIPropGetter<"div", { clear: boolean }> =
    useCallback(
      ({ clear, ...props }) => ({
        ...props,
        ...formControlProps,
        onClick: handlerAll(
          props.onClick,
          clear
            ? (ev) => {
                ev.stopPropagation()

                onClear?.()
              }
            : undefined,
        ),
      }),
      [formControlProps, onClear],
    )

  return {
    id,
    allowInput,
    pattern,
    inputProps,
    formControlProps,
    inputRef,
    onOpen,
    onClose,
    dateToString,
    stringToDate,
    getContainerProps,
    getPopoverProps,
    getFieldProps,
    getCalendarProps,
    getIconProps,
  }
}

export type UseCalendarPickerReturn = ReturnType<typeof useCalendarPicker>
