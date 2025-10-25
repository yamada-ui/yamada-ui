import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { LineStyle } from "./line.style"
import type { UseLineProps } from "./use-line"
import { Line as RechartsLine } from "recharts"
import { createSlotComponent, styled } from "../../core"
import { lineStyle } from "./line.style"
import { useLine } from "./use-line"

export interface LineProps
  extends Merge<HTMLStyledProps<"svg">, UseLineProps>,
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

interface LineDotProps extends Omit<HTMLStyledProps<"circle">, "points"> {
  payload?: Dict[]
  points?: Dict[]
}

export const LineDot = withContext<"circle", LineDotProps>(
  "circle",
  "dot",
)(({ payload: _payload, points: _points, ...props }) => props)

interface LineActiveDotProps extends Omit<HTMLStyledProps<"circle">, "points"> {
  payload?: Dict[]
  points?: Dict[]
}

export const LineActiveDot = withContext<"circle", LineActiveDotProps>(
  "circle",
  "activeDot",
)(({ payload: _payload, points: _points, ...props }) => props)
