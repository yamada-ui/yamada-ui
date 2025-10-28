import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { LegendStyle } from "./legend.style"
import type { UseLegendProps } from "./use-legend"
import { Legend as RechartsLegend } from "recharts"
import { createSlotComponent, styled } from "../../core"
import { legendStyle } from "./legend.style"
import { useLegend } from "./use-legend"

export interface LegendProps
  extends Merge<HTMLStyledProps, UseLegendProps>,
    ThemeProps<LegendStyle> {
  /**
   * Color to specify for the swatch
   */
  colors?: { color: HTMLStyledProps["color"]; dataKey?: number | string }[]
}

const {
  ComponentContext: LegendComponentContext,
  PropsContext: LegendPropsContext,
  useComponentContext: useLegendComponentContext,
  usePropsContext: useLegendPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<LegendProps, LegendStyle, LegendProps>(
  "chart-legend",
  legendStyle,
)

export {
  LegendComponentContext,
  LegendPropsContext,
  useLegendComponentContext,
  useLegendPropsContext,
}

export const Legend = withProvider(
  RechartsLegend,
  "root",
)(({ colors, ...props }) => {
  const customProps = useLegendComponentContext()
  const { getLegendProps, legendStyledProps } = useLegend({
    ...customProps,
    ...props,
  })

  return {
    ...getLegendProps(),
    content: ({ payload }: { payload: Dict[] | undefined }) => (
      <LegendContent colors={colors} payload={payload} {...legendStyledProps} />
    ),
  }
})

interface LegendContentProps extends HTMLStyledProps {
  colors?: { color: HTMLStyledProps["color"]; dataKey?: number | string }[]
  payload?: Dict[]
}

const LegendContent = withContext<"div", LegendContentProps>(
  ({ colors, payload = [], ...rest }) => {
    const items = payload.map(({ dataKey, value: valueProp }, index) => {
      const value = dataKey ?? valueProp
      const color = colors?.find(({ dataKey: key }) => key === dataKey)?.color

      return (
        <LegendContentItem key={index}>
          {color ? <LegendContentSwatch bg={color} /> : null}

          <LegendContentLabel>{value}</LegendContentLabel>
        </LegendContentItem>
      )
    })

    return <styled.div {...rest}>{items}</styled.div>
  },
  "content",
)()

interface LegendContentItemProps extends HTMLStyledProps {}

const LegendContentItem = withContext<"div", LegendContentItemProps>(
  "div",
  "item",
)()

interface LegendContentSwatchProps extends HTMLStyledProps {}

const LegendContentSwatch = withContext<"div", LegendContentSwatchProps>(
  "div",
  "swatch",
)()

interface LegendContentLabelProps extends HTMLStyledProps<"span"> {}

const LegendContentLabel = withContext<"span", LegendContentLabelProps>(
  "span",
  "label",
)()
