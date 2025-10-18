import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { LegendStyle } from "./legend.style"
import type { UseLegendProps } from "./use-legend"
import { Legend as RechartsLegend } from "recharts"
import { createComponent, getClassName, styled } from "../../core"
import { bem } from "../../utils"
import { legendStyle } from "./legend.style"
import { useLegend } from "./use-legend"

export interface LegendProps
  extends Merge<HTMLStyledProps, UseLegendProps>,
    ThemeProps<LegendStyle> {}

const {
  component,
  ComponentContext: LegendComponentContext,
  PropsContext: LegendPropsContext,
  useComponentContext: useLegendComponentContext,
  usePropsContext: useLegendPropsContext,
  withContext,
} = createComponent<LegendProps, LegendStyle, LegendProps>(
  "chart-legend",
  legendStyle,
)

export {
  LegendComponentContext,
  LegendPropsContext,
  useLegendComponentContext,
  useLegendPropsContext,
}

export const Legend = withContext(RechartsLegend)((props) => {
  const customProps = useLegendComponentContext()
  const { getLegendProps, legendStyledProps } = useLegend({
    ...customProps,
    ...props,
  })

  return {
    ...getLegendProps(),
    content: ({ payload }: { payload: Dict[] | undefined }) => (
      <DefaultLegend payload={payload} {...legendStyledProps} />
    ),
  }
})

interface DefaultLegendProps extends HTMLStyledProps {
  payload?: Dict[]
}

const DefaultLegend = component<"div", DefaultLegendProps>(
  ({ payload = [], ...rest }) => {
    const items = payload.map(({ color, dataKey, value: valueProp }, index) => {
      const value = dataKey ?? valueProp

      return (
        <styled.div
          key={`legend-${index}`}
          className="ui-chart__legend-item"
          alignItems="center"
          color={["blackAlpha.800", "whiteAlpha.700"]}
          display="flex"
          fontSize="md"
          gap="sm"
          lineHeight="taller"
          minH="8"
          minW="8"
          px="3"
          rounded="md"
          transitionDuration="slower"
          transitionProperty="common"
          _hover={{
            bg: ["blackAlpha.50", "whiteAlpha.100"],
          }}
        >
          <styled.div
            className="ui-chart__legend-swatch"
            background={color}
            boxSize="3"
            rounded="full"
          />

          <styled.span className="ui-chart__legend-label">{value}</styled.span>
        </styled.div>
      )
    })

    return (
      <styled.div
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-end"
        {...rest}
      >
        {items}
      </styled.div>
    )
  },
  {
    name: "default-legend",
    className: getClassName(bem("chart-legend", "default")),
  },
)()
