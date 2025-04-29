import type { CSSObject, FC } from "../../core"
import type { Dict } from "../../utils"
import { styled } from "../../core"
import { cx, isArray } from "../../utils"

export interface ChartTooltipProps {
  payload: Dict[] | undefined
  styles: Dict<CSSObject | undefined>
  className?: string
  dataKey?: string
  label?: string
  labelFormatter?: (label: string) => string
  radialChart?: boolean
  unit?: string
  valueFormatter?: (value: any) => string
}

export const ChartTooltip: FC<ChartTooltipProps> = ({
  className,
  dataKey = "value",
  label,
  labelFormatter,
  payload = [],
  radialChart,
  styles,
  unit,
  valueFormatter,
  ...rest
}) => {
  const items = payload.map(
    (
      { name: nameProp, color: colorProp, [dataKey]: valueProp, payload } = {},
      index,
    ) => {
      const name = radialChart ? payload?.name : nameProp
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
        <styled.div
          key={`tooltip-payload-${index}`}
          className="ui-chart__tooltip-item"
          css={styles.tooltipItem}
        >
          <styled.div
            className="ui-chart__tooltip-swatch"
            css={styles.tooltipSwatch}
            background={color}
          />

          <styled.span
            className="ui-chart__tooltip-label"
            css={styles.tooltipLabel}
          >
            {name}
          </styled.span>

          <styled.span
            className="ui-chart__tooltip-value"
            css={styles.tooltipValue}
          >
            {value}
            {unit ? unit : ""}
          </styled.span>
        </styled.div>
      )
    },
  )

  return (
    <styled.div
      className={cx("ui-chart__tooltip", className)}
      css={styles.tooltip}
      {...rest}
    >
      {label ? (
        <styled.p className="ui-chart__tooltip-title" css={styles.tooltipTitle}>
          {labelFormatter?.(label) ?? label}
        </styled.p>
      ) : null}

      <styled.div className="ui-chart__tooltip-list" css={styles.tooltipList}>
        {items}
      </styled.div>
    </styled.div>
  )
}

ChartTooltip.displayName = "ChartTooltip"
