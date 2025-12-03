import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { Label } from "./chart.types"
import type { UseLabelProps } from "./use-label"
import type { UseYAxisProps } from "./use-y-axis"
import type { YAxisStyle } from "./y-axis.style"
import { Label as RechartsLabel, YAxis as RechartsYAxis } from "recharts"
import { createSlotComponent, styled } from "../../core"
import { isNumber, isString } from "../../utils"
import { useLabel } from "./use-label"
import { useYAxis } from "./use-y-axis"
import { yAxisStyle } from "./y-axis.style"

export interface YAxisProps
  extends Merge<HTMLStyledProps<"svg">, UseYAxisProps>,
    ThemeProps<YAxisStyle> {
  /**
   * Props passed down to 'Label' component or function that returns a React element.
   */
  label?: Label
}

const {
  ComponentContext: YAxisComponentContext,
  PropsContext: YAxisPropsContext,
  useComponentContext: useYAxisComponentContext,
  usePropsContext: useYAxisPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<YAxisProps, YAxisStyle>("chart-y-axis", yAxisStyle)

export {
  useYAxisComponentContext,
  useYAxisPropsContext,
  YAxisComponentContext,
  YAxisPropsContext,
}

export const YAxis = withProvider<"svg", YAxisProps>(({ label, ...props }) => {
  const customProps = useYAxisComponentContext()
  const { getYAxisProps, styledYAxisProps } = useYAxis({
    ...customProps,
    ...props,
  })

  return (
    <styled.svg asChild {...styledYAxisProps}>
      <RechartsYAxis {...getYAxisProps()}>
        {label ? (
          isNumber(label) || isString(label) ? (
            <YAxisLabel>{label}</YAxisLabel>
          ) : (
            <YAxisLabel {...label} />
          )
        ) : null}
      </RechartsYAxis>
    </styled.svg>
  )
}, "root")()

interface YAxisLabelProps
  extends Merge<HTMLStyledProps<"text">, UseLabelProps> {}

const YAxisLabel = withContext<"text", YAxisLabelProps>((props) => {
  const { getLabelProps, styledLabelProps } = useLabel(props)

  return (
    <styled.text asChild {...styledLabelProps}>
      <RechartsLabel {...getLabelProps()} />
    </styled.text>
  )
}, "label")()
