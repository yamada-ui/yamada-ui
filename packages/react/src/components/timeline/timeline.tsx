"use client"

import type { ReactNode } from "react"
import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { TimelineStyle } from "./timeline.style"
import { useMemo } from "react"
import { createSlotComponent, styled, varAttr } from "../../core"
import { dataAttr, isUndefined } from "../../utils"
import { timelineStyle } from "./timeline.style"

export interface TimelineItem extends Omit<
  TimelineItemProps,
  "content" | "title"
> {
  align?: "end" | "start"
  content?: ReactNode
  description?: ReactNode
  indicator?: ReactNode
  title?: ReactNode
  connectorProps?: TimelineConnectorProps
  contentProps?: TimelineContentProps
  descriptionProps?: TimelineDescriptionProps
  indicatorProps?: TimelineIndicatorProps
  titleProps?: TimelineTitleProps
}

interface ComponentContext extends Pick<TimelineRootProps, "index"> {}

export interface TimelineRootProps
  extends HTMLStyledProps<"ul">, ThemeProps<TimelineStyle> {
  /**
   * The index of the active timeline item.
   */
  index?: number
  /**
   * The fill color of the indicator.
   */
  indicatorFill?: CSSProps["bg"]
  /**
   * The size of the indicator.
   */
  indicatorSize?: CSSProps["boxSize"]
  /**
   * The stroke color of the indicator.
   */
  indicatorStroke?: CSSProps["color"]
  /**
   * If provided, generate timeline components based on items.
   */
  items?: TimelineItem[]
  /**
   * The color of the separator.
   */
  separatorColor?: CSSProps["color"]
  /**
   * The gap of the separator.
   */
  separatorGap?: CSSProps["gap"]
  /**
   * The style of the separator.
   */
  separatorStyle?: CSSProps["borderStyle"]
  /**
   * The width of the separator.
   */
  separatorWidth?: CSSProps["width"]
}

const {
  ComponentContext,
  PropsContext: TimelinePropsContext,
  useComponentContext,
  usePropsContext: useTimelinePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<TimelineRootProps, TimelineStyle, ComponentContext>(
  "timeline",
  timelineStyle,
)

export { TimelinePropsContext, useTimelinePropsContext }

/**
 * `Timeline` is a component that is used to display a list of events in chronological order.
 *
 * @see https://yamada-ui.com/docs/components/timeline
 */
export const TimelineRoot = withProvider(
  ({ children, index = -1, items = [], ...rest }) => {
    const context = useMemo(() => ({ index }), [index])
    const computedChildren = useMemo(() => {
      if (children) return children

      return items.map(
        (
          {
            align = "start",
            content,
            description,
            indicator,
            title,
            connectorProps,
            contentProps,
            descriptionProps,
            indicatorProps,
            titleProps,
            ...rest
          },
          index,
        ) => {
          const children = {
            connector: (
              <TimelineConnector {...connectorProps}>
                <TimelineIndicator {...indicatorProps}>
                  {indicator}
                </TimelineIndicator>
              </TimelineConnector>
            ),
            content: (
              <TimelineContent {...contentProps}>
                {content ?? (
                  <>
                    <TimelineTitle {...titleProps}>{title}</TimelineTitle>
                    <TimelineDescription {...descriptionProps}>
                      {description}
                    </TimelineDescription>
                  </>
                )}
              </TimelineContent>
            ),
          }

          return (
            <TimelineItem key={index} index={index} {...rest}>
              {align === "start" ? children.connector : children.content}
              {align === "start" ? children.content : children.connector}
            </TimelineItem>
          )
        },
      )
    }, [items, children])

    return (
      <ComponentContext value={context}>
        <styled.ul {...rest}>{computedChildren}</styled.ul>
      </ComponentContext>
    )
  },
  "root",
)(
  undefined,
  ({
    indicatorFill,
    indicatorSize,
    indicatorStroke,
    separatorColor,
    separatorGap,
    separatorStyle,
    separatorWidth,
    ...rest
  }) => ({
    "--indicator-fill": varAttr(indicatorFill, "colors"),
    "--indicator-size": varAttr(indicatorSize, "sizes"),
    "--indicator-stroke": varAttr(indicatorStroke, "colors"),
    "--separator-color": varAttr(separatorColor, "colors"),
    "--separator-gap": varAttr(separatorGap, "spaces"),
    "--separator-style": varAttr(separatorStyle),
    "--separator-width": varAttr(separatorWidth, "sizes"),
    ...rest,
  }),
)

export interface TimelineItemProps extends HTMLStyledProps<"li"> {
  /**
   * The index of the timeline item.
   */
  index?: number
}

export const TimelineItem = withContext<"li", TimelineItemProps>("li", "item")(
  undefined,
  ({ index, ...rest }) => {
    const { index: currentIndex } = useComponentContext()
    const active =
      !isUndefined(index) && !isUndefined(currentIndex) && index <= currentIndex

    return {
      ...rest,
      "data-active": dataAttr(active),
      "data-index": index,
    }
  },
)

export interface TimelineConnectorProps extends HTMLStyledProps {}

export const TimelineConnector = withContext<"div", TimelineConnectorProps>(
  "div",
  "connector",
)({ "data-connector": "" })

export interface TimelineIndicatorProps extends HTMLStyledProps {}

const TimelineIcon = styled("div", {
  base: {
    bg: "{indicator-fill}",
    borderColor: "{indicator-stroke}",
    borderWidth: "{separator-width}",
    boxSize: "full",
    rounded: "{indicator-rounded}",
  },
})

export const TimelineIndicator = withContext<"div", TimelineIndicatorProps>(
  "div",
  "indicator",
)(undefined, ({ children = <TimelineIcon />, ...rest }) => ({
  children,
  ...rest,
}))

export interface TimelineContentProps extends HTMLStyledProps {}

export const TimelineContent = withContext<"div", TimelineContentProps>(
  "div",
  "content",
)({ "data-content": "" })

export interface TimelineTitleProps extends HTMLStyledProps<"h3"> {}

export const TimelineTitle = withContext<"h3", TimelineTitleProps>(
  "h3",
  "title",
)()

export interface TimelineDescriptionProps extends HTMLStyledProps<"p"> {}

export const TimelineDescription = withContext<"p", TimelineDescriptionProps>(
  "p",
  "description",
)()
