import type { ButtonProps } from "@yamada-ui/button"
import { Button } from "@yamada-ui/button"
import type { HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import { cx, filterUndefined } from "@yamada-ui/utils"
import type { FC } from "react"
import type { CalendarHeaderProps } from "./calendar-header"
import { CalendarHeader } from "./calendar-header"
import { useCalendarContext } from "./use-calendar"
import { useMonthList } from "./use-month-list"

interface MonthListOptions {
  /**
   * Props for calendar header element.
   */
  headerProps?: HTMLUIProps
  /**
   * Props for calendar month grid element.
   */
  monthGridProps?: HTMLUIProps
  /**
   * Props for calendar month button element.
   */
  monthProps?: ButtonProps & {
    component?: FC<{ month: string; year: number; index: number }>
  }
}

export interface MonthListProps
  extends HTMLUIProps,
    Omit<CalendarHeaderProps, "label" | "index">,
    MonthListOptions {}

export const MonthList: FC<MonthListProps> = ({
  className,
  headerProps,
  labelProps,
  controlProps,
  prevProps,
  nextProps,
  monthProps,
  monthGridProps,
  ...rest
}) => {
  const { year, styles } = useCalendarContext()
  const { label, rangeMonths, getGridProps, getButtonProps } = useMonthList()

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
          label,
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
          ...styles.month,
        }}
        {...getGridProps({
          ...filterUndefined({ w, minW, maxW, h, minH, maxH }),
          ...monthGridProps,
        })}
      >
        {rangeMonths.map((month, index) => (
          <Button
            key={index}
            className="ui-calendar__month-list-button"
            variant="ghost"
            __css={{
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
