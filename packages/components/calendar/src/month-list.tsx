import type { ButtonProps } from "@yamada-ui/button"
import { Button } from "@yamada-ui/button"
import type { HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import { cx, filterUndefined } from "@yamada-ui/utils"
import type { FC } from "react"
import type { CalendarHeaderProps } from "./calendar-header"
import { CalendarHeader } from "./calendar-header"
import { getFormattedLabel } from "./calendar-utils"
import { useCalendarContext } from "./use-calendar"
import { useMonthList } from "./use-month-list"

type MonthListOptions = {
  /**
   * Props for calendar header element.
   */
  headerProps?: HTMLUIProps<"div">
  /**
   * Props for calendar month button element.
   */
  monthProps?: ButtonProps & {
    component?: FC<{ month: string; year: number; index: number }>
  }
}

export type MonthListProps = HTMLUIProps<"div"> &
  Omit<CalendarHeaderProps, "label" | "index"> &
  MonthListOptions

export const MonthList: FC<MonthListProps> = ({
  className,
  headerProps,
  labelProps,
  controlProps,
  prevProps,
  nextProps,
  monthProps,
  ...rest
}) => {
  const { year, locale, yearFormat, styles } = useCalendarContext()
  const { rangeMonths, getContainerProps, getButtonProps } = useMonthList()

  const { component: customMonth, ...computedMonthProps } = monthProps ?? {}

  const w = rest.w ?? rest.width
  const minW = rest.minW ?? rest.minWidth
  const maxW = rest.maxW ?? rest.maxWidth
  const h = rest.h ?? rest.height
  const minH = rest.minH ?? rest.minHeight
  const maxH = rest.maxH ?? rest.maxHeight

  return (
    <ui.div __css={{ ...styles.content }} {...filterUndefined(rest)}>
      <CalendarHeader
        {...{
          ...headerProps,
          label: getFormattedLabel(year, locale, yearFormat),
          labelProps,
          controlProps,
          prevProps,
          nextProps,
        }}
      />

      <ui.div
        className={cx("ui-calendar__month-list", className)}
        __css={{
          w: styles.content?.w ?? styles.content?.width,
          minW: styles.content?.minW ?? styles.content?.minWidth,
          maxW: styles.content?.maxW ?? styles.content?.maxWidth,
          h: styles.content?.h ?? styles.content?.height,
          minH: styles.content?.minH ?? styles.content?.minHeight,
          maxH: styles.content?.maxH ?? styles.content?.maxHeight,
          display: "grid",
          ...styles.month,
        }}
        {...getContainerProps(
          filterUndefined({ w, minW, maxW, h, minH, maxH }),
        )}
      >
        {rangeMonths.map((month, index) => (
          <Button
            key={index}
            className="ui-calendar__month-list-button"
            variant="ghost"
            __css={{
              minW: "auto",
              h: "auto",
              p: 0,
              fontSize: undefined,
              fontWeight: "normal",
              ...styles.button,
            }}
            {...getButtonProps({ ...computedMonthProps, value: index })}
          >
            {customMonth ? customMonth({ month, year, index }) : month}
          </Button>
        ))}
      </ui.div>
    </ui.div>
  )
}
