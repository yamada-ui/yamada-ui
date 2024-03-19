import { forwardRef, ui } from "@yamada-ui/core"
import { cx, isArray, type Dict } from "@yamada-ui/utils"
import { useTooltip } from "./use-chart"

export type ChartTooltipProps = {
  label: string
  payload: Dict[] | undefined
  valueFormatter?: (value: number) => string
  unit?: string
}

export const ChartTooltip = forwardRef<ChartTooltipProps, "div">(
  ({ label, className, payload = [], valueFormatter, unit }, ref) => {
    const { styles } = useTooltip()

    const items = payload.map(
      ({ color, name, value: valueProp } = {}, index) => {
        let value: string

        if (isArray(valueProp)) {
          value = valueProp
            .map((value) => {
              return `${valueFormatter?.(value) ?? value}`
            })
            .join(" - ")
        } else {
          value = valueFormatter?.(valueProp) ?? valueProp
        }

        return (
          <ui.div
            className="ui-chart__tooltip-item"
            key={`tooltip-payload-${index}`}
            __css={styles.tooltipItem}
          >
            <ui.div
              className="ui-chart__tooltip-swatch"
              background={color}
              __css={styles.tooltipSwatch}
            />

            <ui.span
              className="ui-chart__tooltip-label"
              __css={styles.tooltipLabel}
            >
              {name}
            </ui.span>

            <ui.span
              className="ui-chart__tooltip-value"
              __css={styles.tooltipValue}
            >
              {value}
              {unit ? unit : ""}
            </ui.span>
          </ui.div>
        )
      },
    )

    return (
      <ui.div
        ref={ref}
        className={cx("ui-chart__tooltip", className)}
        __css={styles.tooltip}
      >
        <ui.p className="ui-chart__tooltip-title" __css={styles.tooltipTitle}>
          {label}
        </ui.p>

        <ui.div className="ui-chart__tooltip-list" __css={styles.tooltipList}>
          {items}
        </ui.div>
      </ui.div>
    )
  },
)
