import type { CSSObject, FC, HTMLUIProps } from "../../core"
import type { Dict } from "../../utils"
import { ui } from "../../core"
import { cx } from "../../utils"

interface ChartLegendOptions {
  styles: Dict<CSSObject | undefined>
  onHighlight: (area: null | string) => void
  payload?: Dict[]
}

export interface ChartLegendProps extends HTMLUIProps, ChartLegendOptions {}

export const ChartLegend: FC<ChartLegendProps> = ({
  ref,
  className,
  payload = [],
  styles,
  onHighlight,
  ...rest
}) => {
  const items = payload.map(({ color, dataKey, value: valueProp }, index) => {
    const value = dataKey ?? valueProp

    return (
      <ui.div
        key={`legend-${index}`}
        className="ui-chart__legend-item"
        css={styles.legendItem}
        onMouseEnter={() => onHighlight(value)}
        onMouseLeave={() => onHighlight(null)}
      >
        <ui.div
          className="ui-chart__legend-swatch"
          css={styles.legendSwatch}
          background={color}
        />

        <ui.span className="ui-chart__legend-label">{value}</ui.span>
      </ui.div>
    )
  })

  return (
    <ui.div
      ref={ref}
      className={cx("ui-chart__legend", className)}
      css={styles.legend}
      {...rest}
    >
      {items}
    </ui.div>
  )
}

ChartLegend.displayName = "ChartLegend"
ChartLegend.__ui__ = "ChartLegend"
