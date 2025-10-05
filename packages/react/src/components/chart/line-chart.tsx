"use client"

import type { LineProps } from "recharts"
import type { HTMLStyledProps } from "../../core"
import type { Dict } from "../../utils"
import type { LineChartStyle } from "./line-chart.style"
import { Line, LineChart, ResponsiveContainer } from "recharts"
import { createSlotComponent, styled } from "../../core"
import { lineChartStyle } from "./line-chart.style"

export interface LineChartRootProps extends HTMLStyledProps {
  data: Dict[]
}

// TODO: useSplitChildrenが便利。ModalOverlayとかで使用されている。
// TODO: Grid,XAxis,YAxis,Tooltip,Legendは省略可能にする。with***でいけるようにして、子要素が渡されたら、それを優先する。
// TODO: それぞれを単体のコンポーネントとして用意して、ProviderをLineChart.Rootで囲むようにする。

const {
  PropsContext: LineChartPropsContext,
  usePropsContext: useLineChartPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<LineChartRootProps, LineChartStyle>(
  "line-chart",
  lineChartStyle,
)

export { LineChartPropsContext, useLineChartPropsContext }

export const LineChartRoot = withProvider<"div", LineChartRootProps>(
  ({ children, data, ...props }) => {
    return (
      <styled.div {...props}>
        <ResponsiveContainer>
          <LineChart data={data}>{children}</LineChart>
        </ResponsiveContainer>
      </styled.div>
    )
  },
  "root",
)()

export interface LineChartLineProps extends LineProps {}

export const LineChartLine = withContext<"svg", LineChartLineProps>(
  (props) => <Line {...props} />,
  "line",
)()
