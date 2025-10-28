import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { LineStyle } from "./line.style"
import type { UseLineProps } from "./use-line"
import { Line as RechartsLine } from "recharts"
import { createSlotComponent, styled } from "../../core"
import { lineStyle } from "./line.style"
import { useLine } from "./use-line"

export interface LineProps<T extends number | string | symbol = number | string>
  extends Merge<HTMLStyledProps<"svg">, UseLineProps<T>>,
    ThemeProps<LineStyle> {}

const {
  ComponentContext: LineComponentContext,
  PropsContext: LinePropsContext,
  useComponentContext: useLineComponentContext,
  usePropsContext: useLinePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<LineProps, LineStyle, LineProps>(
  "chart-line",
  lineStyle,
)

export {
  LineComponentContext,
  LinePropsContext,
  useLineComponentContext,
  useLinePropsContext,
}

export const Line = withProvider<"svg", LineProps>((props) => {
  const customProps = useLineComponentContext()
  const { getLineProps, lineStyledProps } = useLine({
    ...customProps,
    ...props,
  })

  return (
    <styled.line asChild {...lineStyledProps}>
      <RechartsLine {...getLineProps()} />
    </styled.line>
  )
})()

export interface LineDotProps
  extends Omit<HTMLStyledProps<"circle">, "cx" | "cy" | "points"> {
  cx?: number | string
  cy?: number | string
  payload?: Dict[]
  points?: Dict[]
  value?: number | string
}

export const LineDot = withContext<"circle", LineDotProps>(
  ({ cx, cy, payload: _payload, points: _points, value, ...props }) => {
    return value ? (
      <styled.circle asChild {...props}>
        <circle cx={cx} cy={cy} />
      </styled.circle>
    ) : null
  },
  "dot",
)()

interface LineActiveDotProps
  extends Omit<HTMLStyledProps<"circle">, "cx" | "cy" | "points"> {
  cx?: number | string
  cy?: number | string
  payload?: Dict[]
  points?: Dict[]
}

export const LineActiveDot = withContext<"circle", LineActiveDotProps>(
  ({ cx, cy, payload: _payload, points: _points, ...props }) => {
    return (
      <styled.circle asChild {...props}>
        <circle cx={cx} cy={cy} />
      </styled.circle>
    )
  },
  "activeDot",
)()
