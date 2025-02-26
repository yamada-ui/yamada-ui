import type { ReactNode } from "react"
import type { CSSUIObject, HTMLUIProps } from "../../core"
import type { Dict } from "../../utils"
import { ui } from "../../core"
import { cx, isUndefined } from "../../utils"

const RADIAN = Math.PI / 180
const DEFAULT_LABEL_OFFSET = 22

export interface PieChartLabelProps {
  styles: Dict<CSSUIObject | undefined>
  className?: string
  calcPercent?: boolean
  cx?: number
  cy?: number
  innerRadius?: number
  labelFormatter?: (value: number) => string
  labelOffset?: number
  midAngle?: number
  middleRadius?: number
  outerRadius?: number
  percent?: number
  value?: number
  labelProps?: HTMLUIProps<"text">
}

export const pieChartLabel: (props: PieChartLabelProps) => ReactNode = ({
  className: cellClassName,
  calcPercent,
  cx: cxProp = 0,
  cy: cyProp = 0,
  innerRadius = 0,
  labelFormatter,
  labelOffset: labelOffsetProp,
  midAngle = 0,
  middleRadius = 0,
  outerRadius = 0,
  percent = 0,
  styles,
  value = 0,
  labelProps,
}) => {
  const labelOffset =
    labelOffsetProp ?? (outerRadius - innerRadius) * 0.5 + DEFAULT_LABEL_OFFSET

  const x = cxProp + (middleRadius + labelOffset) * Math.cos(-midAngle * RADIAN)
  const y = cyProp + (middleRadius + labelOffset) * Math.sin(-midAngle * RADIAN)

  const textAnchor = x > cxProp ? "start" : x < cxProp ? "end" : "middle"
  const displayLabel = () => {
    if (calcPercent) {
      return (
        parseFloat((percent * 100).toFixed(0)) > 0 &&
        `${(percent * 100).toFixed(0)}%`
      )
    } else if (!isUndefined(labelFormatter)) {
      return labelFormatter(value)
    } else {
      return value
    }
  }

  return (
    <ui.text
      className={cx(cellClassName, "ui-chart__label")}
      dominantBaseline="central"
      textAnchor={textAnchor}
      x={x}
      y={y}
      __css={styles}
      {...labelProps}
    >
      {displayLabel()}
    </ui.text>
  )
}

interface Point {
  x: number
  y: number
}

export interface PieChartLabelLineProps {
  styles: Dict<CSSUIObject | undefined>
  className?: string
  cx?: number
  cy?: number
  innerRadius?: number
  labelOffset?: number
  midAngle?: number
  middleRadius?: number
  outerRadius?: number
  points?: Point[]
  labelLineProps?: HTMLUIProps<"path">
}

export const pieChartLabelLine: (
  props: PieChartLabelLineProps,
) => React.ReactElement<SVGElement> = ({
  className: cellClassName,
  cx: cxProp = 0,
  cy: cyProp = 0,
  innerRadius = 0,
  labelOffset: labelOffsetProp,
  midAngle = 0,
  middleRadius = 0,
  outerRadius = 0,
  points = [{ x: 0, y: 0 }],
  styles,
  labelLineProps,
}) => {
  const labelOffset =
    labelOffsetProp ?? (outerRadius - innerRadius) * 0.5 + DEFAULT_LABEL_OFFSET

  const x = cxProp + (middleRadius + labelOffset) * Math.cos(-midAngle * RADIAN)
  const y = cyProp + (middleRadius + labelOffset) * Math.sin(-midAngle * RADIAN)

  const d = `M ${points[0]?.x} ${points[0]?.y} L ${x} ${y}`

  return (
    <ui.path
      className={cx(cellClassName, "ui-chart__label-line")}
      d={d}
      __css={styles}
      {...labelLineProps}
    />
  )
}
