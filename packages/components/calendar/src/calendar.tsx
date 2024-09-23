import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  ComponentArgs,
} from "@yamada-ui/core"
import { ui, useComponentMultiStyle, omitThemeProps } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { ForwardedRef, RefAttributes } from "react"
import { forwardRef } from "react"
import type { CalendarHeaderProps } from "./calendar-header"
import type { MonthProps } from "./month"
import { Month } from "./month"
import type { MonthListProps } from "./month-list"
import { MonthList } from "./month-list"
import type {
  UseCalendarProps,
  CalendarContext,
  MaybeValue,
} from "./use-calendar"
import { CalendarProvider, useCalendar } from "./use-calendar"
import type { YearListProps } from "./year-list"
import { YearList } from "./year-list"

interface CalendarOptions {
  /**
   * Props for calendar header element.
   */
  headerProps?: HTMLUIProps
}

export interface CalendarBaseProps
  extends Omit<HTMLUIProps, "value" | "defaultValue" | "onChange">,
    ThemeProps<"Calendar">,
    CalendarOptions,
    Omit<CalendarHeaderProps, "label" | "index">,
    Pick<YearListProps, "yearProps" | "yearGridProps">,
    Pick<MonthListProps, "monthProps" | "monthGridProps">,
    Pick<MonthProps, "tableProps" | "weekdayProps" | "dayProps"> {}

export interface CalendarProps<Y extends MaybeValue = Date>
  extends CalendarBaseProps,
    UseCalendarProps<Y> {}

/**
 * `Calendar` is a component for displaying or selecting dates in a calendar.
 *
 * @see Docs https://yamada-ui.com/components/data-display/calendar
 */
export const Calendar = forwardRef(
  <T extends MaybeValue = Date>(
    props: CalendarProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [styles, mergedProps] = useComponentMultiStyle("Calendar", props)
    const {
      className,
      value,
      defaultValue,
      onChange,
      headerProps,
      tableProps,
      yearGridProps,
      monthGridProps,
      labelProps,
      controlProps,
      prevProps,
      nextProps,
      yearProps,
      monthProps,
      weekdayProps,
      dayProps,
      ...computedProps
    } = omitThemeProps(mergedProps)

    const { type, getContainerProps, ...rest } = useCalendar<T>({
      value,
      defaultValue,
      onChange,
      ...computedProps,
    })

    const css: CSSUIObject = {
      ...styles.container,
    }

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
          __css={css}
          {...getContainerProps({}, ref)}
        >
          {type === "year" ? (
            <YearList
              {...{
                headerProps,
                labelProps,
                controlProps,
                prevProps,
                nextProps,
                yearGridProps,
                yearProps,
                w,
                minW,
                maxW,
                h,
                minH,
                maxH,
              }}
            />
          ) : null}
          {type === "month" ? (
            <MonthList
              {...{
                headerProps,
                labelProps,
                controlProps,
                prevProps,
                nextProps,
                monthGridProps,
                monthProps,
                w,
                minW,
                maxW,
                h,
                minH,
                maxH,
              }}
            />
          ) : null}
          {type === "date" ? (
            <Month
              {...{
                headerProps,
                tableProps,
                labelProps,
                controlProps,
                prevProps,
                nextProps,
                weekdayProps,
                dayProps,
                w,
                minW,
                maxW,
                h,
                minH,
                maxH,
              }}
            />
          ) : null}
        </ui.div>
      </CalendarProvider>
    )
  },
) as {
  <Y extends MaybeValue = Date>(
    props: CalendarProps<Y> & RefAttributes<HTMLDivElement>,
  ): JSX.Element
} & ComponentArgs

Calendar.displayName = "Calendar"
