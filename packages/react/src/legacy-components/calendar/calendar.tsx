import type { ForwardedRef, ReactElement, RefAttributes } from "react"
import type { ComponentArgs, HTMLUIProps, ThemeProps } from "../../core"
import type { CalendarHeaderProps } from "./calendar-header"
import type { MonthProps } from "./month"
import type { MonthListProps } from "./month-list"
import type {
  CalendarContext,
  MaybeValue,
  UseCalendarProps,
} from "./use-calendar"
import type { YearListProps } from "./year-list"
import { forwardRef } from "react"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { cx } from "../../utils"
import { Month } from "./month"
import { MonthList } from "./month-list"
import { CalendarProvider, useCalendar } from "./use-calendar"
import { YearList } from "./year-list"

interface CalendarOptions {
  /**
   * Props for calendar header element.
   */
  headerProps?: HTMLUIProps
}

export interface CalendarBaseProps
  extends Omit<HTMLUIProps, "defaultValue" | "onChange" | "value">,
    ThemeProps<"Calendar">,
    CalendarOptions,
    Omit<CalendarHeaderProps, "index" | "label">,
    Pick<YearListProps, "yearGridProps" | "yearProps">,
    Pick<MonthListProps, "monthGridProps" | "monthProps">,
    Pick<MonthProps, "dayProps" | "tableProps" | "weekdayProps"> {}

export interface CalendarProps<Y extends MaybeValue = Date>
  extends CalendarBaseProps,
    UseCalendarProps<Y> {}

/**
 * `Calendar` is a component for displaying or selecting dates in a calendar.
 *
 * @see https://yamada-ui.com/components/data-display/calendar
 */
export const Calendar = forwardRef(
  <T extends MaybeValue = Date>(
    props: CalendarProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [styles, mergedProps] = useComponentMultiStyle("Calendar", props)
    const {
      className,
      defaultValue,
      value,
      controlProps,
      dayProps,
      headerProps,
      labelProps,
      monthGridProps,
      monthProps,
      nextProps,
      prevProps,
      tableProps,
      weekdayProps,
      yearGridProps,
      yearProps,
      onChange,
      ...computedProps
    } = omitThemeProps(mergedProps)

    const { type, getContainerProps, ...rest } = useCalendar<T>({
      defaultValue,
      value,
      onChange,
      ...computedProps,
    })

    const w = computedProps.w ?? computedProps.width
    const minW = computedProps.minW ?? computedProps.minWidth
    const maxW = computedProps.maxW ?? computedProps.maxWidth
    const h = computedProps.h ?? computedProps.height
    const minH = computedProps.minH ?? computedProps.minHeight
    const maxH = computedProps.maxH ?? computedProps.maxHeight

    return (
      <CalendarProvider
        value={{ type, styles, ...rest } as unknown as CalendarContext}
      >
        <ui.div
          className={cx("ui-calendar", className)}
          __css={styles.container}
          {...getContainerProps({}, ref)}
        >
          {type === "year" ? (
            <YearList
              {...{
                h,
                maxH,
                maxW,
                minH,
                minW,
                w,
                controlProps,
                headerProps,
                labelProps,
                nextProps,
                prevProps,
                yearGridProps,
                yearProps,
              }}
            />
          ) : null}
          {type === "month" ? (
            <MonthList
              {...{
                h,
                maxH,
                maxW,
                minH,
                minW,
                w,
                controlProps,
                headerProps,
                labelProps,
                monthGridProps,
                monthProps,
                nextProps,
                prevProps,
              }}
            />
          ) : null}
          {type === "date" ? (
            <Month
              {...{
                h,
                maxH,
                maxW,
                minH,
                minW,
                w,
                controlProps,
                dayProps,
                headerProps,
                labelProps,
                nextProps,
                prevProps,
                tableProps,
                weekdayProps,
              }}
            />
          ) : null}
        </ui.div>
      </CalendarProvider>
    )
  },
) as (<Y extends MaybeValue = Date>(
  props: CalendarProps<Y> & RefAttributes<HTMLDivElement>,
) => ReactElement) &
  ComponentArgs

Calendar.displayName = "Calendar"
Calendar.__ui__ = "Calendar"
