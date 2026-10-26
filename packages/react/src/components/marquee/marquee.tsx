"use client"

import type {
  CSSProps,
  HTMLStyledProps,
  SimpleDirection,
  ThemeProps,
} from "../../core"
import type { Merge } from "../../utils"
import type { MarqueeStyle } from "./marquee.style"
import type { UseMarqueeProps } from "./use-marquee"
import { useMemo } from "react"
import { createSlotComponent, styled, varAttr } from "../../core"
import {
  useFindChild,
  useOmitChildren,
  usePickChildren,
  useValidChildren,
} from "../../utils"
import { marqueeStyle } from "./marquee.style"
import { MarqueeContext, useMarquee, useMarqueeContext } from "./use-marquee"

export interface MarqueeRootProps
  extends Merge<HTMLStyledProps, UseMarqueeProps>, ThemeProps<MarqueeStyle> {
  /**
   * The color of the edge gradient.
   *
   * @default 'bg'
   */
  edgeColor?: CSSProps["color"]
  /**
   * The size of the edge gradient.
   *
   * @default '20%'
   */
  edgeSize?: CSSProps["width"]
  /**
   * Props for content component.
   */
  contentProps?: MarqueeContentProps
}

const {
  PropsContext: MarqueePropsContext,
  usePropsContext: useMarqueePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<MarqueeRootProps, MarqueeStyle>("marquee", marqueeStyle)

export { MarqueePropsContext, useMarqueePropsContext }

/**
 * `Marquee` continuously scrolls content horizontally or vertically.
 *
 * @see https://yamada-ui.com/docs/components/marquee
 */
export const MarqueeRoot = withProvider<"div", MarqueeRootProps>(
  ({ children, contentProps, ...rest }) => {
    const validChildren = useValidChildren(children)
    const customContent = useFindChild(validChildren, MarqueeContent)
    const items = usePickChildren(validChildren, MarqueeItem)
    const otherChildren = useOmitChildren(validChildren, MarqueeItem)
    const {
      copies,
      getContentProps,
      getEdgeProps,
      getGroupProps,
      getRootProps,
    } = useMarquee(rest)
    const context = useMemo(
      () => ({ copies, getContentProps, getEdgeProps, getGroupProps }),
      [copies, getContentProps, getEdgeProps, getGroupProps],
    )

    return (
      <MarqueeContext value={context}>
        <styled.div {...getRootProps()}>
          {customContent ? (
            children
          ) : (
            <>
              <MarqueeContent {...contentProps}>{items}</MarqueeContent>
              {otherChildren}
            </>
          )}
        </styled.div>
      </MarqueeContext>
    )
  },
  "root",
)(undefined, ({ edgeColor, edgeSize, gap, ...rest }) => ({
  ...rest,
  "--marquee-edge-color": varAttr(edgeColor, "colors"),
  "--marquee-edge-size": varAttr(edgeSize, "sizes"),
  "--marquee-gap": varAttr(gap, "spaces"),
}))

export interface MarqueeContentProps extends HTMLStyledProps {}

export const MarqueeContent = withContext<"div", MarqueeContentProps>(
  ({ children, ...rest }) => {
    const { copies, getContentProps, getGroupProps } = useMarqueeContext()

    return (
      <styled.div {...getContentProps(rest)}>
        {Array.from({ length: copies + 1 }, (_, index) => (
          <MarqueeGroup key={index} {...getGroupProps({ index })}>
            {children}
          </MarqueeGroup>
        ))}
      </styled.div>
    )
  },
  "content",
)()

const MarqueeGroup = withContext("div", "group")()

export interface MarqueeItemProps extends HTMLStyledProps {}

export const MarqueeItem = withContext<"div", MarqueeItemProps>("div", "item")()

export interface MarqueeEdgeProps extends Omit<HTMLStyledProps, "direction"> {
  /**
   * The edge to fade, relative to the marquee orientation.
   *
   * @default 'start'
   */
  direction?: SimpleDirection
}

export const MarqueeEdge = withContext<"div", MarqueeEdgeProps>("div", "edge")(
  undefined,
  (props) => {
    const { getEdgeProps } = useMarqueeContext()

    return getEdgeProps(props)
  },
)
