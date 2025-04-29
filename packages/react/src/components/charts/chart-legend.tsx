import type { CSSObject, FC, HTMLStyledProps } from "../../core"
import type { Dict } from "../../utils"
import { styled } from "../../core"
import { cx } from "../../utils"

interface ChartLegendOptions {
  styles: Dict<CSSObject | undefined>
  onHighlight: (area: null | string) => void
  payload?: Dict[]
}

export interface ChartLegendProps extends HTMLStyledProps, ChartLegendOptions {}

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
      <styled.div
        key={`legend-${index}`}
        className="ui-chart__legend-item"
        css={styles.legendItem}
        onMouseEnter={() => onHighlight(value)}
        onMouseLeave={() => onHighlight(null)}
      >
        <styled.div
          className="ui-chart__legend-swatch"
          css={styles.legendSwatch}
          background={color}
        />

        <styled.span className="ui-chart__legend-label">{value}</styled.span>
      </styled.div>
    )
  })

  return (
    <styled.div
      ref={ref}
      className={cx("ui-chart__legend", className)}
      css={styles.legend}
      {...rest}
    >
      {items}
    </styled.div>
  )
}
