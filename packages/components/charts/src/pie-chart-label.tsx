import { ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

const RADIAN = Math.PI / 180
//TODO: considar to which distance is this. (center or outerRadius)
const DEFAULT_LABEL_OFFSET = 22

export const pieChartLabel: (props: any) => React.ReactNode = ({
  className: cellClassName,
  cx: cxProp = 0,
  cy: cyProp = 0,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  value,
  labelOffset: labelOffsetProp,
  isParcent,
  styles,
  //TODO: considar to `labelProps`
  // ...rest
}) => {
  const labelOffset =
    labelOffsetProp ?? outerRadius * 0.5 + DEFAULT_LABEL_OFFSET
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5

  const x = cxProp + (radius + labelOffset) * Math.cos(-midAngle * RADIAN)
  const y = cyProp + (radius + labelOffset) * Math.sin(-midAngle * RADIAN)
  //TODO: considar to `valueFormatter`
  const displayLabel = isParcent
    ? parseFloat((percent * 100).toFixed(0)) > 0 &&
      `${(percent * 100).toFixed(0)}%`
    : value

  return (
    <ui.text
      className={cx(cellClassName, "ui-pie-chart__label")}
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="central"
      __css={styles}
      // color="white"
      // {...rest}
    >
      {displayLabel}
    </ui.text>
  )
}
