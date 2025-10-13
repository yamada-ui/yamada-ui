import type { ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { TooltipStyle } from "./tooltip.style"
import type { UseTooltipProps } from "./use-tooltip"
import { Tooltip as RechartsTooltip } from "recharts"
import { createComponent, getClassName, styled } from "../../core"
import { bem, isArray } from "../../utils"
import { tooltipStyle } from "./tooltip.style"
import { useTooltip } from "./use-tooltip"

export interface TooltipProps
  extends UseTooltipProps,
    ThemeProps<TooltipStyle> {
  /**
   * A function to format labels on inside the tooltip.
   */
  labelFormatter?: (label: string) => string
  /**
   * Unit displayed next to each tick.
   */
  unit?: string
  /**
   * A function to format values on inside the tooltip.
   */
  valueFormatter?: (value: any) => string
}

const {
  component,
  ComponentContext: TooltipComponentContext,
  PropsContext: TooltipPropsContext,
  useComponentContext: useTooltipComponentContext,
  usePropsContext: useTooltipPropsContext,
  withContext,
} = createComponent<TooltipProps, TooltipStyle>("chart-tooltip", tooltipStyle)

export {
  TooltipComponentContext,
  TooltipPropsContext,
  useTooltipComponentContext,
  useTooltipPropsContext,
}

export const Tooltip = withContext<"div", TooltipProps>(RechartsTooltip)(({
  labelFormatter,
  unit,
  valueFormatter,
  ...props
}) => {
  const customProps = useTooltipComponentContext()
  const { getTooltipProps, tooltipStyledProps } = useTooltip({
    ...customProps,
    ...props,
  })

  return {
    ...getTooltipProps(),
    content: ({
      label,
      payload,
    }: {
      payload: Dict[] | undefined
      label?: string
    }) => (
      <DefaultTooltip
        label={label}
        labelFormatter={labelFormatter}
        payload={payload}
        unit={unit}
        valueFormatter={valueFormatter}
        {...tooltipStyledProps}
      />
    ),
  }
})

interface DefaultTooltipProps {
  payload: Dict[] | undefined
  dataKey?: string
  label?: string
  labelFormatter?: (label: string) => string
  radialChart?: boolean
  unit?: string
  valueFormatter?: (value: any) => string
}

const DefaultTooltip = component<"div", DefaultTooltipProps>(
  ({
    dataKey = "value",
    label,
    labelFormatter,
    payload = [],
    radialChart,
    unit,
    valueFormatter,
    ...rest
  }) => {
    const items = payload.map(
      (
        {
          name: nameProp,
          color: colorProp,
          [dataKey]: valueProp,
          payload,
        } = {},
        index,
      ) => {
        const name = radialChart ? payload?.name : nameProp
        const color = colorProp ?? payload?.color
        let value: string

        if (isArray(valueProp)) {
          value = valueProp
            .map((value) => {
              return `${valueFormatter?.(value) ?? value}`
            })
            .join(" - ")
        } else {
          value = valueFormatter?.(valueProp) ?? valueProp
        }

        return (
          <styled.div
            key={`tooltip-payload-${index}`}
            className="ui-chart__tooltip-item"
            alignItems="center"
            display="flex"
            fontSize="sm"
            gap="sm"
          >
            <styled.div
              className="ui-chart__tooltip-swatch"
              background={color}
              boxSize="3"
              rounded="full"
            />

            <styled.span
              className="ui-chart__tooltip-label"
              color={["blackAlpha.800", "whiteAlpha.700"]}
            >
              {name}
            </styled.span>

            <styled.span
              className="ui-chart__tooltip-value"
              flex="1"
              textAlign="end"
            >
              {value}
              {unit ? unit : ""}
            </styled.span>
          </styled.div>
        )
      },
    )

    return (
      <styled.div
        className="ui-chart__tooltip"
        bg={["white", "black"]}
        border="1px solid"
        borderColor={["blackAlpha.200", "whiteAlpha.100"]}
        boxShadow={["md", "dark-md"]}
        color="inherit"
        display="flex"
        flexDirection="column"
        fontSize="sm"
        fontWeight="medium"
        gap="sm"
        maxW="xs"
        minW="48"
        p="3"
        rounded="md"
        zIndex="dodoria"
        {...rest}
      >
        {label ? (
          <styled.p className="ui-chart__tooltip-title" fontSize="md">
            {labelFormatter?.(label) ?? label}
          </styled.p>
        ) : null}

        <styled.div
          className="ui-chart__tooltip-list"
          display="flex"
          flexDirection="column"
          gap="xs"
        >
          {items}
        </styled.div>
      </styled.div>
    )
  },
  {
    name: "default-tooltip",
    className: getClassName(bem("chart-tooltip", "default")),
  },
)()
