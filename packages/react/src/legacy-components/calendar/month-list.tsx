import type { ButtonProps } from "../../components/button"
import type { FC, HTMLUIProps } from "../../core"
import type { CalendarHeaderProps } from "./calendar-header"
import { Button } from "../../components/button"
import { ui } from "../../core"
import { cx, filterUndefined } from "../../utils"
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
  monthProps?: {
    component?: FC<{ index: number; month: string; year: number }>
  } & ButtonProps
}

export interface MonthListProps
  extends HTMLUIProps,
    Omit<CalendarHeaderProps, "index" | "label">,
    MonthListOptions {}

export const MonthList: FC<MonthListProps> = ({
  className,
  controlProps,
  headerProps,
  labelProps,
  monthGridProps,
  monthProps,
  nextProps,
  prevProps,
  ...rest
}) => {
  const { styles, year } = useCalendarContext()
  const { label, rangeMonths, getButtonProps, getGridProps } = useMonthList()

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
          controlProps,
          labelProps,
          nextProps,
          prevProps,
        }}
      />

      <ui.div
        className={cx("ui-calendar__month-list", className)}
        __css={{
          display: "grid",
          h: styles.content?.h ?? styles.content?.height,
          maxH: styles.content?.maxH ?? styles.content?.maxHeight,
          maxW: styles.content?.maxW ?? styles.content?.maxWidth,
          minH: styles.content?.minH ?? styles.content?.minHeight,
          minW: styles.content?.minW ?? styles.content?.minWidth,
          w: styles.content?.w ?? styles.content?.width,
          ...styles.month,
        }}
        {...getGridProps({
          ...filterUndefined({ h, maxH, maxW, minH, minW, w }),
          ...monthGridProps,
        })}
      >
        {rangeMonths.map((month, index) => (
          <Button
            key={index}
            className="ui-calendar__month-list__button"
            variant="ghost"
            __css={{
              fontSize: undefined,
              fontWeight: "normal",
              h: "auto",
              minW: "auto",
              p: 0,
              ...styles.button,
            }}
            {...getButtonProps({ ...computedMonthProps, value: index })}
          >
            {customMonth ? customMonth({ index, month, year }) : month}
          </Button>
        ))}
      </ui.div>
    </ui.div>
  )
}

MonthList.displayName = "MonthList"
MonthList.__ui__ = "MonthList"
