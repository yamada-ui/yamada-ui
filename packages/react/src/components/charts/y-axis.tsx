import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { UseYAxisProps } from "./use-y-axis"
import type { YAxisStyle } from "./y-axis.style"
import { YAxis as RechartsYAxis } from "recharts"
import { createSlotComponent, styled } from "../../core"
import { useYAxis } from "./use-y-axis"
import { yAxisStyle } from "./y-axis.style"

export interface YAxisProps
  extends Merge<HTMLStyledProps<"svg">, UseYAxisProps>,
    ThemeProps<YAxisStyle> {}

const {
  ComponentContext: YAxisComponentContext,
  PropsContext: YAxisPropsContext,
  useComponentContext: useYAxisComponentContext,
  usePropsContext: useYAxisPropsContext,
  withProvider,
} = createSlotComponent<YAxisProps, YAxisStyle>("chart-y-axis", yAxisStyle)

export {
  useYAxisComponentContext,
  useYAxisPropsContext,
  YAxisComponentContext,
  YAxisPropsContext,
}

export const YAxis = withProvider<"svg", YAxisProps>((props) => {
  const customProps = useYAxisComponentContext()
  const { getYAxisProps, styledYAxisProps } = useYAxis({
    ...customProps,
    ...props,
  })

  return (
    <styled.svg asChild {...styledYAxisProps}>
      <RechartsYAxis {...getYAxisProps()} />
    </styled.svg>
  )
}, "root")()
