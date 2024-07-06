import { ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

const RADIAN = Math.PI / 180

export const pieChartLabel: (props: any) => React.ReactNode = ({
  className: pieClassName,
  cx: cxProp = 0,
  cy: cyProp = 0,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  value,
  labelOffset = 0,
  isParcent,
  styles,
  //TODO: considar to `labelProps`
  // ...rest
}) => {
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
      className={cx(pieClassName, "ui-pie-chart__label")}
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="central"
      __css={styles}
      // {...rest}
    >
      {displayLabel}
    </ui.text>
  )
}
