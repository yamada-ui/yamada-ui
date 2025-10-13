import type { HTMLStyledProps } from "../../core"
import type { Merge } from "../../utils"
import type { UseYAxisProps } from "./use-y-axis"
import type { YAxisStyle } from "./y-axis.style"
import { YAxis as RechartsYAxis } from "recharts"
import { createComponent } from "../../core"
import { useYAxis } from "./use-y-axis"
import { yAxisStyle } from "./y-axis.style"

export interface YAxisProps
  extends Merge<HTMLStyledProps<"svg">, UseYAxisProps> {}

const {
  ComponentContext: YAxisComponentContext,
  PropsContext: YAxisPropsContext,
  useComponentContext: useYAxisComponentContext,
  usePropsContext: useYAxisPropsContext,
  withContext,
} = createComponent<YAxisProps, YAxisStyle>("chart-y-axis", yAxisStyle)

export {
  useYAxisComponentContext,
  useYAxisPropsContext,
  YAxisComponentContext,
  YAxisPropsContext,
}

// NOTE: When processed with the second argument, properties such as `stroke` are absorbed by YamadaUI.
export const YAxis = withContext<"svg", YAxisProps>((props) => {
  const customProps = useYAxisComponentContext()
  const { getYAxisProps } = useYAxis({ ...customProps, ...props })

  return <RechartsYAxis {...getYAxisProps()} />
})()
