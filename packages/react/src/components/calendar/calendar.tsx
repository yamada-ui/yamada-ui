"use client"

import type { ReactElement } from "react"
import type { GenericsComponent, HTMLStyledProps, ThemeProps } from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { CalendarStyle } from "./calendar.style"
import type {
  MaybeDateValue,
  UseCalendarDayProps,
  UseCalendarProps,
  UseCalendarReturn,
} from "./use-calendar"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { runIfFn } from "../../utils"
import { ChevronLeftIcon, ChevronRightIcon } from "../icon"
import { Select } from "../select"
import { calendarStyle } from "./calendar.style"
import {
  CalendarContext,
  CalendarDescendantsContext,
  useCalendar,
  useCalendarContext,
  useCalendarDay,
} from "./use-calendar"

interface ComponentContext
  extends Pick<
      UseCalendarReturn,
      | "getMonthProps"
      | "getMonthSelectProps"
      | "getNavigationProps"
      | "getNextButtonProps"
      | "getPrevButtonProps"
      | "getStatusProps"
      | "getWeekdayProps"
      | "getYearSelectProps"
      | "monthDays"
      | "monthItems"
      | "weekdays"
      | "yearItems"
    >,
    Pick<
      CalendarRootProps,
      | "buttonProps"
      | "controlProps"
      | "day"
      | "dayProps"
      | "monthProps"
      | "monthSelectProps"
      | "navigationProps"
      | "nextButtonProps"
      | "prevButtonProps"
      | "selectProps"
      | "weekdayProps"
      | "weekdaysProps"
      | "weekProps"
      | "weeksProps"
      | "yearSelectProps"
    > {}

export interface CalendarRootProps<Y extends MaybeDateValue = Date>
  extends Omit<HTMLStyledProps, "defaultValue" | "onChange">,
    ThemeProps<CalendarStyle>,
    UseCalendarProps<Y>,
    Pick<CalendarMonthProps, "day"> {
  /**
   * Props for the button component.
   */
  buttonProps?: HTMLStyledProps<"button">
  /**
   * Props for the control component.
   */
  controlProps?: CalendarControlProps
  /**
   * Props for the day component.
   */
  dayProps?: Omit<CalendarDayProps, "value">
  /**
   * Props for the month component.
   */
  monthProps?: CalendarMonthProps
  /**
   * Props for the month select component.
   */
  monthSelectProps?: CalendarMonthSelectProps
  /**
   * Props for the navigation component.
   */
  navigationProps?: Omit<CalendarNavigationProps, "children">
  /**
   * Props for the next button component.
   */
  nextButtonProps?: CalendarNextButtonProps
  /**
   * Props for the prev button component.
   */
  prevButtonProps?: CalendarPrevButtonProps
  /**
   * Props for the select component.
   */
  selectProps?: Select.RootProps
  /**
   * Props for the weekday component.
   */
  weekdayProps?: HTMLStyledProps<"th">
  /**
   * Props for the weekdays component.
   */
  weekdaysProps?: HTMLStyledProps<"tr">
  /**
   * Props for the week component.
   */
  weekProps?: HTMLStyledProps<"tr">
  /**
   * Props for the weeks component.
   */
  weeksProps?: HTMLStyledProps<"tbody">
  /**
   * Props for the year select component.
   */
  yearSelectProps?: CalendarYearSelectProps
}

const {
  ComponentContext,
  PropsContext: CalendarPropsContext,
  useComponentContext,
  usePropsContext: useCalendarPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<CalendarRootProps, CalendarStyle, ComponentContext>(
  "calendar",
  calendarStyle,
)

export { CalendarPropsContext, useCalendarPropsContext }

/**
 * `Calendar` is a component for displaying or selecting dates in a calendar.
 *
 * @see https://yamada-ui.com/docs/components/calendar
 */
export const CalendarRoot = withProvider(
  <Y extends MaybeDateValue = Date>({
    children,
    day,
    buttonProps,
    controlProps,
    dayProps,
    monthProps,
    monthSelectProps,
    navigationProps,
    nextButtonProps,
    prevButtonProps,
    selectProps,
    weekdayProps,
    weekdaysProps,
    weekProps,
    weeksProps,
    yearSelectProps,
    ...props
  }: CalendarRootProps<Y>) => {
    const {
      descendants,
      disabled,
      endOfMonth,
      excludeDate,
      holidays,
      locale,
      max,
      maxDate,
      minDate,
      month,
      monthDays,
      monthItems,
      multiple,
      range,
      startDayOfWeek,
      startOfMonth,
      today,
      value,
      weekdays,
      weekendDays,
      yearItems,
      getMonthProps,
      getMonthSelectProps,
      getNavigationProps,
      getNextButtonProps,
      getPrevButtonProps,
      getRootProps,
      getStatusProps,
      getWeekdayProps,
      getYearSelectProps,
      onChange,
      onMonthChange,
      onNextMonth,
      onPrevMonth,
    } = useCalendar<Y>(props)
    const calendarContext = useMemo(
      () => ({
        disabled,
        endOfMonth,
        excludeDate,
        holidays,
        locale,
        max,
        maxDate,
        minDate,
        month,
        multiple,
        range,
        startDayOfWeek,
        startOfMonth,
        today,
        value,
        weekendDays,
        onChange,
        onMonthChange,
        onNextMonth,
        onPrevMonth,
      }),
      [
        disabled,
        endOfMonth,
        excludeDate,
        holidays,
        locale,
        max,
        maxDate,
        minDate,
        month,
        multiple,
        range,
        startDayOfWeek,
        startOfMonth,
        today,
        value,
        weekendDays,
        onChange,
        onMonthChange,
        onNextMonth,
        onPrevMonth,
      ],
    )
    const componentContext = useMemo(
      () => ({
        day,
        monthDays,
        monthItems,
        weekdays,
        yearItems,
        buttonProps,
        controlProps,
        dayProps,
        getMonthProps,
        getMonthSelectProps,
        getNavigationProps,
        getNextButtonProps,
        getPrevButtonProps,
        getStatusProps,
        getWeekdayProps,
        getYearSelectProps,
        monthProps,
        monthSelectProps,
        navigationProps,
        nextButtonProps,
        prevButtonProps,
        selectProps,
        weekdayProps,
        weekdaysProps,
        weekProps,
        weeksProps,
        yearSelectProps,
      }),
      [
        day,
        monthDays,
        monthItems,
        weekdays,
        yearItems,
        buttonProps,
        controlProps,
        dayProps,
        getMonthProps,
        getMonthSelectProps,
        getNavigationProps,
        getNextButtonProps,
        getPrevButtonProps,
        getStatusProps,
        getWeekdayProps,
        getYearSelectProps,
        monthProps,
        monthSelectProps,
        navigationProps,
        nextButtonProps,
        prevButtonProps,
        selectProps,
        weekdayProps,
        weekdaysProps,
        weekProps,
        weeksProps,
        yearSelectProps,
      ],
    )
    const computedChildren = useMemo(() => {
      if (children) return children

      return (
        <>
          <CalendarNavigation />
          <CalendarMonth />
        </>
      )
    }, [children])

    return (
      <CalendarDescendantsContext value={descendants}>
        <CalendarContext value={calendarContext}>
          <ComponentContext value={componentContext}>
            <styled.div {...getRootProps()}>{computedChildren}</styled.div>
          </ComponentContext>
        </CalendarContext>
      </CalendarDescendantsContext>
    )
  },
  "root",
)() as GenericsComponent<{
  <Y extends MaybeDateValue = Date>(props: CalendarRootProps<Y>): ReactElement
}>

export interface CalendarNavigationProps extends HTMLStyledProps<"nav"> {}

export const CalendarNavigation = withContext<"nav", CalendarNavigationProps>(
  "nav",
  ["row", "navigation"],
)(undefined, ({ children, ...rest }) => {
  const { getNavigationProps, navigationProps } = useComponentContext()

  const computedChildren = useMemo(() => {
    if (children) return children

    return (
      <>
        <CalendarPrevButton />
        <CalendarControl />
        <CalendarNextButton />
      </>
    )
  }, [children])

  return {
    ...getNavigationProps({ ...navigationProps, ...rest }),
    children: computedChildren,
  }
})

export interface CalendarControlProps
  extends Omit<HTMLStyledProps, "children"> {
  /**
   * The control children to use.
   */
  children?: ReactNodeOrFunction<{ month: Date }>
}

export const CalendarControl = withContext<"div", CalendarControlProps>(
  "div",
  "control",
)(undefined, ({ children, ...rest }) => {
  const { month } = useCalendarContext()
  const { controlProps, getStatusProps } = useComponentContext()

  const computedChildren = useMemo(() => {
    if (children) return runIfFn(children, { month })

    return (
      <>
        <CalendarMonthSelect />
        <CalendarYearSelect />
      </>
    )
  }, [children, month])

  return {
    ...controlProps,
    ...rest,
    children: (
      <>
        {computedChildren}
        <styled.div {...getStatusProps()} />
      </>
    ),
  }
})

export interface CalendarPrevButtonProps extends HTMLStyledProps<"button"> {}

export const CalendarPrevButton = withContext<
  "button",
  CalendarPrevButtonProps
>("button", ["button", "prev"])(
  undefined,
  ({ children = <ChevronLeftIcon />, ...rest }) => {
    const { buttonProps, getPrevButtonProps, prevButtonProps } =
      useComponentContext()

    return {
      children,
      ...getPrevButtonProps({ ...buttonProps, ...prevButtonProps, ...rest }),
    }
  },
)

export interface CalendarNextButtonProps extends HTMLStyledProps<"button"> {}

export const CalendarNextButton = withContext<
  "button",
  CalendarNextButtonProps
>("button", ["button", "next"])(
  undefined,
  ({ children = <ChevronRightIcon />, ...rest }) => {
    const { buttonProps, getNextButtonProps, nextButtonProps } =
      useComponentContext()

    return {
      children,
      ...getNextButtonProps({ ...buttonProps, ...nextButtonProps, ...rest }),
    }
  },
)

export interface CalendarSeparatorProps extends HTMLStyledProps<"span"> {}

export const CalendarSeparator = withContext<"span", CalendarSeparatorProps>(
  "span",
  "separator",
)({ children: "/", role: "separator" })

export interface CalendarYearSelectProps extends Select.RootProps {}

export const CalendarYearSelect = withContext<"div", CalendarYearSelectProps>(
  (props) => {
    const { yearItems, getYearSelectProps, selectProps, yearSelectProps } =
      useComponentContext()
    const { contentProps, rootProps, ...rest } = {
      ...selectProps,
      ...yearSelectProps,
      ...props,
    }

    return (
      <Select.Root
        variant="plain"
        items={yearItems}
        minH="{cell-size}"
        contentProps={{ minW: "{select-content-size}", ...contentProps }}
        rootProps={{
          fontSize: "{select-font-size}",
          w: "{select-root-size}",
          ...rootProps,
        }}
        {...getYearSelectProps(rest)}
      />
    )
  },
  ["select", "years"],
)()

export interface CalendarMonthSelectProps extends Select.RootProps {}

export const CalendarMonthSelect = withContext<"div", CalendarMonthSelectProps>(
  (props) => {
    const { monthItems, getMonthSelectProps, monthSelectProps, selectProps } =
      useComponentContext()
    const { contentProps, rootProps, ...rest } = {
      ...selectProps,
      ...monthSelectProps,
      ...props,
    }

    return (
      <Select.Root
        variant="plain"
        items={monthItems}
        minH="{cell-size}"
        contentProps={{ minW: "{select-content-size}", ...contentProps }}
        rootProps={{
          fontSize: "{select-font-size}",
          w: "{select-root-size}",
          ...rootProps,
        }}
        {...getMonthSelectProps(rest)}
      />
    )
  },
  ["select", "months"],
)()

export interface CalendarMonthProps
  extends Omit<HTMLStyledProps<"table">, "children"> {
  /**
   * The day component to use.
   */
  day?: ReactNodeOrFunction<{ value: Date }>
}

export const CalendarMonth = withContext<"table", CalendarMonthProps>(
  "table",
  "month",
)(undefined, ({ day: dayProp, ...rest }) => {
  const {
    day,
    monthDays,
    weekdays,
    dayProps,
    getMonthProps,
    getWeekdayProps,
    monthProps,
    weekdayProps,
    weekdaysProps,
    weekProps,
    weeksProps,
  } = useComponentContext()

  dayProp ??= day

  const computedChildren = useMemo(() => {
    return (
      <>
        <styled.thead aria-hidden>
          <CalendarWeekDays {...weekdaysProps}>
            {weekdays.map(({ label, value }, index) => (
              <CalendarWeekday
                key={index}
                {...getWeekdayProps({ ...weekdayProps, value })}
              >
                {label}
              </CalendarWeekday>
            ))}
          </CalendarWeekDays>
        </styled.thead>

        <CalendarWeeks {...weeksProps}>
          {monthDays.map((week, index) => (
            <CalendarWeek key={index} {...weekProps}>
              {week.map((value) => (
                <CalendarDay
                  key={value.toDateString()}
                  {...{ ...dayProps, value }}
                >
                  {runIfFn(dayProp, { value }) ?? (
                    <styled.span>{value.getDate()}</styled.span>
                  )}
                </CalendarDay>
              ))}
            </CalendarWeek>
          ))}
        </CalendarWeeks>
      </>
    )
  }, [
    dayProp,
    dayProps,
    getWeekdayProps,
    monthDays,
    weekProps,
    weekdayProps,
    weekdays,
    weekdaysProps,
    weeksProps,
  ])

  return {
    ...getMonthProps({ ...monthProps, ...rest }),
    children: computedChildren,
  }
})

const CalendarWeekDays = withContext("tr", ["row", "weekdays"])()

const CalendarWeekday = withContext("th", ["cell", "weekday"])()

const CalendarWeeks = withContext("tbody", "weeks")()

const CalendarWeek = withContext("tr", ["row", "week"])()

interface CalendarDayProps
  extends Omit<HTMLStyledProps<"td">, "value">,
    UseCalendarDayProps {}

const CalendarDay = withContext<"td", CalendarDayProps>("td", ["cell", "day"])(
  undefined,
  (props) => {
    const { getDayProps } = useCalendarDay(props)

    return getDayProps()
  },
)
