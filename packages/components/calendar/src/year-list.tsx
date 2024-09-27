import type { ButtonProps } from "@yamada-ui/button"
import { Button } from "@yamada-ui/button"
import type { FC, HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import { cx, filterUndefined } from "@yamada-ui/utils"
import type { CalendarHeaderProps } from "./calendar-header"
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
  yearProps?: ButtonProps & { component?: FC<{ year: number; index: number }> }
}

export interface YearListProps
  extends HTMLUIProps,
    Omit<CalendarHeaderProps, "label" | "index">,
    YearListOptions {}

export const YearList: FC<YearListProps> = ({
  className,
  headerProps,
  labelProps,
  controlProps,
  prevProps,
  nextProps,
  yearProps,
  yearGridProps,
  ...rest
}) => {
  const { locale, yearFormat, styles } = useCalendarContext()
  const { label, rangeYears, getGridProps, getButtonProps } = useYearList()

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
          labelProps,
          controlProps,
          prevProps,
          nextProps,
        }}
      />

      <ui.div
        className={cx("ui-calendar__year-list", className)}
        __css={{
          w: styles.content?.w ?? styles.content?.width,
          minW: styles.content?.minW ?? styles.content?.minWidth,
          maxW: styles.content?.maxW ?? styles.content?.maxWidth,
          h: styles.content?.h ?? styles.content?.height,
          minH: styles.content?.minH ?? styles.content?.minHeight,
          maxH: styles.content?.maxH ?? styles.content?.maxHeight,
          ...styles.year,
        }}
        {...getGridProps({
          ...filterUndefined({ w, minW, maxW, h, minH, maxH }),
          ...yearGridProps,
        })}
      >
        {rangeYears.map((year, index) => (
          <Button
            key={index}
            className="ui-calendar__year-list-button"
            variant="ghost"
            __css={{
              ...styles.button,
            }}
            {...getButtonProps({ ...computedYearProps, value: year, index })}
          >
            {customYear
              ? customYear({ year, index })
              : getFormattedLabel(year, locale, yearFormat)}
          </Button>
        ))}
      </ui.div>
    </ui.div>
  )
}

YearList.displayName = "YearList"
YearList.__ui__ = "YearList"
