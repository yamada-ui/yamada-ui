import type { ReactElement } from "react"
import type { HTMLStyledProps } from "../../core"
import type { ChartContainerStyle } from "./chart-container.style"
import type { ResponsiveContainerProps } from "./chart.types"
import { ResponsiveContainer } from "recharts"
import { createComponent } from "../../core"
import { chartContainerStyle } from "./chart-container.style"
import { useChart } from "./use-chart"

interface ChartContainerProps extends HTMLStyledProps {
  children: ReactElement
  containerProps?: ResponsiveContainerProps
}

export const { withContext } = createComponent<
  ChartContainerProps,
  ChartContainerStyle
>("chart-container", chartContainerStyle)

export const ChartContainer = withContext<"div", ChartContainerProps>(
  ({ children, containerProps }) => {
    const { getContainerProps } = useChart({ containerProps })

    return (
      <ResponsiveContainer {...getContainerProps()}>
        {children}
      </ResponsiveContainer>
    )
  },
)()
