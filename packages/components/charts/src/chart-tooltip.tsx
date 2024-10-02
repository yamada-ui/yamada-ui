import { forwardRef, ui } from "@yamada-ui/core"
import { cx, isArray } from "@yamada-ui/utils"
import type { Dict } from "@yamada-ui/utils"
import { useTooltip } from "./use-chart"

export interface ChartTooltipProps {
  label?: string
  dataKey?: string
  payload: Dict[] | undefined
  valueFormatter?: (value: any) => string
  labelFormatter?: (label: string) => string
  unit?: string
  isRadialChart?: boolean
}

export const ChartTooltip = forwardRef<ChartTooltipProps, "div">(
  (
    {
      label,
      dataKey = "value",
      className,
      payload = [],
      valueFormatter,
      labelFormatter,
      unit,
      isRadialChart,
      ...rest
    },
    ref,
  ) => {
    const { styles } = useTooltip()

    const items = payload.map(
      (
        {
          color: colorProp,
          name: nameProp,
          [dataKey]: valueProp,
          payload,
        } = {},
        index,
      ) => {
        const name = isRadialChart ? payload?.name : nameProp
        const color = colorProp ?? payload?.color
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
        {...rest}
      >
        {label ? (
          <ui.p className="ui-chart__tooltip-title" __css={styles.tooltipTitle}>
            {labelFormatter?.(label) ?? label}
          </ui.p>
        ) : null}

        <ui.div className="ui-chart__tooltip-list" __css={styles.tooltipList}>
          {items}
        </ui.div>
      </ui.div>
    )
  },
)

ChartTooltip.displayName = "ChartTooltip"
ChartTooltip.__ui__ = "ChartTooltip"
