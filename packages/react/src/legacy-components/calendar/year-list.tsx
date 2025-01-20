import type { ButtonProps } from "../../components/button"
import type { FC, HTMLUIProps } from "../../core"
import type { CalendarHeaderProps } from "./calendar-header"
import { Button } from "../../components/button"
import { ui } from "../../core"
import { cx, filterUndefined } from "../../utils"
import { CalendarHeader } from "./calendar-header"
import { getFormattedLabel } from "./calendar-utils"
import { useCalendarContext } from "./use-calendar"
import { useYearList } from "./use-year-list"

interface YearListOptions {
  /**
   * Props for calendar header element.
   */
  headerProps?: HTMLUIProps
  /**
   * Props for calendar year grid element.
   */
  yearGridProps?: HTMLUIProps
  /**
   * Props for calendar year button element.
   */
  yearProps?: { component?: FC<{ index: number; year: number }> } & ButtonProps
}

export interface YearListProps
  extends HTMLUIProps,
    Omit<CalendarHeaderProps, "index" | "label">,
    YearListOptions {}

export const YearList: FC<YearListProps> = ({
  className,
  controlProps,
  headerProps,
  labelProps,
  nextProps,
  prevProps,
  yearGridProps,
  yearProps,
  ...rest
}) => {
  const { locale, styles, yearFormat } = useCalendarContext()
  const { label, rangeYears, getButtonProps, getGridProps } = useYearList()

  const { component: customYear, ...computedYearProps } = yearProps ?? {}

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
        className={cx("ui-calendar__year-list", className)}
        __css={{
          display: "grid",
          h: styles.content?.h ?? styles.content?.height,
          maxH: styles.content?.maxH ?? styles.content?.maxHeight,
          maxW: styles.content?.maxW ?? styles.content?.maxWidth,
          minH: styles.content?.minH ?? styles.content?.minHeight,
          minW: styles.content?.minW ?? styles.content?.minWidth,
          w: styles.content?.w ?? styles.content?.width,
          ...styles.year,
        }}
        {...getGridProps({
          ...filterUndefined({ h, maxH, maxW, minH, minW, w }),
          ...yearGridProps,
        })}
      >
        {rangeYears.map((year, index) => (
          <Button
            key={index}
            className="ui-calendar__year-list__button"
            variant="ghost"
            __css={{
              fontSize: undefined,
              fontWeight: "normal",
              h: "auto",
              minW: "auto",
              p: 0,
              ...styles.button,
            }}
            {...getButtonProps({ ...computedYearProps, index, value: year })}
          >
            {customYear
              ? customYear({ index, year })
              : getFormattedLabel(year, locale, yearFormat)}
          </Button>
        ))}
      </ui.div>
    </ui.div>
  )
}

YearList.displayName = "YearList"
YearList.__ui__ = "YearList"
