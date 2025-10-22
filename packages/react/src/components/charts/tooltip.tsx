import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { TooltipStyle } from "./tooltip.style"
import type { UseTooltipProps } from "./use-tooltip"
import { Tooltip as RechartsTooltip } from "recharts"
import { createSlotComponent, styled } from "../../core"
import { isArray } from "../../utils"
import { tooltipStyle } from "./tooltip.style"
import { useTooltip } from "./use-tooltip"

export interface TooltipRootProps
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
  ComponentContext: TooltipComponentContext,
  PropsContext: TooltipPropsContext,
  useComponentContext: useTooltipComponentContext,
  usePropsContext: useTooltipPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<TooltipRootProps, TooltipStyle>(
  "chart-tooltip",
  tooltipStyle,
)

export {
  TooltipComponentContext,
  TooltipPropsContext,
  useTooltipComponentContext,
  useTooltipPropsContext,
}

export const Tooltip = withProvider<"div", TooltipRootProps>(
  RechartsTooltip,
  "root",
)(({ labelFormatter, unit, valueFormatter, ...props }) => {
  const customProps = useTooltipComponentContext()
  const { getTooltipProps, tooltipStyledProps } = useTooltip({
    ...customProps,
    ...props,
  })

  return {
    ...getTooltipProps({
      cursor: <TooltipCursor />,
    }),
    content: ({
      label,
      payload,
    }: {
      payload: Dict[] | undefined
      label?: string
    }) => (
      <TooltipContent
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

interface TooltipCursorProps
  extends Omit<HTMLStyledProps<"path">, "height" | "points" | "width"> {
  height?: number
  payload?: Dict[]
  points?: { x: number; y: number }[]
  width?: number
}

const TooltipCursor = withContext<"path", TooltipCursorProps>(
  ({
    bottom: _bottom,
    height,
    left: _left,
    payload: _payload,
    points = [],
    right: _right,
    stroke: _stroke,
    top: _top,
    width,
    ...props
  }) => {
    return (
      <styled.path asChild {...props}>
        <path
          d={`M${points[0]?.x},${points[0]?.y}L${points[1]?.x},${points[1]?.y}`}
          height={height}
          width={width}
        />
      </styled.path>
    )
  },
  "cursor",
)()

interface TooltipContentProps extends HTMLStyledProps {
  payload: Dict[] | undefined
  dataKey?: string
  label?: string
  labelFormatter?: (label: string) => string
  radialChart?: boolean
  unit?: string
  valueFormatter?: (value: any) => string
}

const TooltipContent = withContext<"div", TooltipContentProps>(
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
          <TooltipContentItem key={index}>
            {color ? <TooltipContentSwatch bg={color} /> : null}

            <TooltipContentLabel>{name}</TooltipContentLabel>

            <TooltipContentValue>
              {value}
              {unit ?? ""}
            </TooltipContentValue>
          </TooltipContentItem>
        )
      },
    )

    return (
      <styled.div {...rest}>
        {label ? (
          <TooltipContentTitle>
            {labelFormatter?.(label) ?? label}
          </TooltipContentTitle>
        ) : null}

        <TooltipContentList>{items}</TooltipContentList>
      </styled.div>
    )
  },
  "content",
)()

interface TooltipContentTitle extends HTMLStyledProps<"p"> {}

const TooltipContentTitle = withContext<"p", TooltipContentTitle>(
  "p",
  "title",
)()

interface TooltipContentList extends HTMLStyledProps {}

const TooltipContentList = withContext<"div", TooltipContentList>(
  "div",
  "list",
)()

interface TooltipContentItem extends HTMLStyledProps {}

const TooltipContentItem = withContext<"div", TooltipContentItem>(
  "div",
  "item",
)()

interface TooltipContentSwatch extends HTMLStyledProps {}

const TooltipContentSwatch = withContext<"div", TooltipContentSwatch>(
  "div",
  "swatch",
)()

interface TooltipContentLabel extends HTMLStyledProps<"span"> {}

const TooltipContentLabel = withContext<"span", TooltipContentLabel>(
  "span",
  "label",
)()

interface TooltipContentValue extends HTMLStyledProps<"span"> {}

const TooltipContentValue = withContext<"span", TooltipContentValue>(
  "span",
  "value",
)()
