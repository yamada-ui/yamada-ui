"use client"

import type { ReactNode } from "react"
import type {
  Direction,
  HTMLStyledProps,
  SimpleDirection,
  ThemeProps,
} from "../../core"
import type { Merge } from "../../utils"
import type { BubbleStyle } from "./bubble.style"
import { useMemo } from "react"
import { createSlotComponent, mergeProps, styled } from "../../core"
import { useSplitChildren } from "../../utils"
import { bubbleStyle } from "./bubble.style"

export interface BubbleItemWithContent extends Omit<
  BubbleItemProps,
  "children"
> {
  children: ReactNode
  reactions?: ReactNode
  reactionsProps?: Omit<BubbleReactionsProps, "children">
}

export interface BubbleItemWithGroup
  extends
    Required<Pick<BubbleGroupProps, "items">>,
    Omit<BubbleGroupProps, "children" | "items"> {}

export type BubbleItem =
  | BubbleItemWithContent
  | Omit<BubbleGroupProps, "children" | "direction">

interface ComponentContext extends Pick<
  BubbleRootProps,
  | "contentProps"
  | "endGroupProps"
  | "endItemProps"
  | "groupProps"
  | "itemProps"
  | "reactionsProps"
  | "startGroupProps"
  | "startItemProps"
> {}

export interface BubbleRootProps extends Merge<
  HTMLStyledProps,
  ThemeProps<BubbleStyle>
> {
  /**
   * If provided, generate elements based on items.
   */
  items?: BubbleItem[]
  /**
   * The props for content component.
   */
  contentProps?: Omit<BubbleContentProps, "children">
  /**
   * The theme props for group component in end direction.
   */
  endGroupProps?: Omit<BubbleGroupProps, "children" | "direction" | "items">
  /**
   * The theme props for item component in end direction.
   */
  endItemProps?: Omit<BubbleItemProps, "children" | "direction">
  /**
   * The props for group component.
   */
  groupProps?: Omit<BubbleGroupProps, "children" | "direction" | "items">
  /**
   * The props for item component.
   */
  itemProps?: Omit<BubbleItemProps, "children" | "direction">
  /**
   * The props for reactions component.
   */
  reactionsProps?: Omit<BubbleReactionsProps, "children">
  /**
   * The theme props for group component in start direction.
   */
  startGroupProps?: Omit<BubbleGroupProps, "children" | "direction" | "items">
  /**
   * The theme props for item component in start direction.
   */
  startItemProps?: Omit<BubbleItemProps, "children" | "direction">
}

const {
  component,
  ComponentContext,
  PropsContext: BubblePropsContext,
  useComponentContext,
  usePropsContext: useBubblePropsContext,
  withContext,
  withProvider,
  useRootComponentProps,
} = createSlotComponent<BubbleItemProps, BubbleStyle, ComponentContext>(
  "bubble",
  bubbleStyle,
)

export { BubblePropsContext, useBubblePropsContext }

/**
 * `Bubble` is a component that displays conversational content in a message bubble.
 *
 * @see https://yamada-ui.com/docs/components/bubble
 */
export const BubbleRoot = component<"div", BubbleRootProps>((props) => {
  const [
    ,
    {
      colorScheme,
      size,
      variant,
      children,
      items,
      contentProps,
      endGroupProps,
      endItemProps,
      groupProps,
      itemProps,
      reactionsProps,
      startGroupProps,
      startItemProps,
      ...rest
    },
  ] = useRootComponentProps(props, "root", {
    transferProps: ["variant", "colorScheme", "size"],
  })
  const computedChildren = useMemo(() => {
    if (children) return children

    return items?.map((props, index) => {
      if ("children" in props) {
        const { children, reactions, contentProps, reactionsProps, ...rest } =
          props

        return (
          <BubbleItem key={index} {...rest}>
            <BubbleContent {...contentProps}>{children}</BubbleContent>
            {reactions ? (
              <BubbleReactions {...reactionsProps}>{reactions}</BubbleReactions>
            ) : null}
          </BubbleItem>
        )
      } else {
        return <BubbleGroup key={index} {...props} />
      }
    })
  }, [children, items])
  const context = useMemo(
    () => ({ colorScheme, size, variant }),
    [colorScheme, size, variant],
  )
  const componentContext = useMemo(
    () => ({
      contentProps,
      endGroupProps,
      endItemProps,
      groupProps,
      itemProps,
      reactionsProps,
      startGroupProps,
      startItemProps,
    }),
    [
      groupProps,
      itemProps,
      contentProps,
      reactionsProps,
      startItemProps,
      endItemProps,
      startGroupProps,
      endGroupProps,
    ],
  )

  return (
    <BubblePropsContext value={context}>
      <ComponentContext value={componentContext}>
        <styled.div {...rest}>{computedChildren}</styled.div>
      </ComponentContext>
    </BubblePropsContext>
  )
}, "root")()

export interface BubbleGroupProps
  extends
    Merge<HTMLStyledProps, Pick<BubbleItemProps, "direction">>,
    ThemeProps<BubbleStyle> {
  /**
   * If provided, generate elements based on items.
   */
  items?: BubbleItemWithContent[]
}

export const BubbleGroup = component<"div", BubbleGroupProps>((props) => {
  const [
    ,
    { colorScheme, size, variant, children, direction, items, ...rest },
  ] = useRootComponentProps(props, "group", {
    transferProps: ["variant", "colorScheme", "size"],
  })
  const computedChildren = useMemo(() => {
    if (children) return children

    return items?.map(
      (
        { children, reactions, contentProps, reactionsProps, ...rest },
        index,
      ) => (
        <BubbleItem key={index} {...rest}>
          <BubbleContent {...contentProps}>{children}</BubbleContent>
          {reactions ? (
            <BubbleReactions {...reactionsProps}>{reactions}</BubbleReactions>
          ) : null}
        </BubbleItem>
      ),
    )
  }, [children, items])

  const context = useMemo(
    () => ({ colorScheme, size, variant, direction }),
    [colorScheme, size, variant, direction],
  )

  return (
    <BubblePropsContext value={context}>
      <styled.div {...rest}>{computedChildren}</styled.div>
    </BubblePropsContext>
  )
}, "group")(({ direction = "start", ...rest }) => {
  const { endGroupProps, groupProps, startGroupProps } = useComponentContext()
  const directionProps = direction === "start" ? startGroupProps : endGroupProps

  return mergeProps(groupProps, directionProps, { direction, ...rest })()
})

export interface BubbleItemProps
  extends
    Omit<HTMLStyledProps, "direction">,
    Pick<BubbleRootProps, "contentProps">,
    ThemeProps<BubbleStyle> {
  /**
   * The inline direction of the bubble.
   *
   * @default 'start'
   */
  direction?: SimpleDirection
}

export const BubbleItem = withProvider<"div", BubbleItemProps>(
  ({ children, direction, contentProps, ...rest }) => {
    const [content, customContent, reactions] = useSplitChildren(
      children,
      BubbleContent,
      BubbleReactions,
    )

    return (
      <styled.div data-direction={direction} {...rest}>
        {customContent ?? (
          <BubbleContent {...contentProps}>{content}</BubbleContent>
        )}

        {reactions}
      </styled.div>
    )
  },
  "item",
)((props) => {
  const contextProps = useBubblePropsContext()
  const { endItemProps, itemProps, startItemProps } = useComponentContext()
  const direction = props.direction ?? contextProps?.direction ?? "start"
  const directionProps = direction === "start" ? startItemProps : endItemProps

  return mergeProps(contextProps, itemProps, directionProps, {
    ...props,
    direction,
  })()
})

export interface BubbleContentProps extends HTMLStyledProps {}

export const BubbleContent = withContext<"div", BubbleContentProps>(
  "div",
  "content",
)(undefined, (props) => {
  const { contentProps } = useComponentContext()

  return mergeProps(contentProps, props)()
})

export interface BubbleReactionsProps extends HTMLStyledProps {
  /**
   * The placement of the reactions.
   *
   * @default 'end-end'
   */
  placement?: Exclude<Direction, "end" | "start" | `center-${string}`>
}

export const BubbleReactions = withContext<"div", BubbleReactionsProps>(
  "div",
  "reactions",
)(undefined, (props) => {
  const { reactionsProps } = useComponentContext()
  const { placement = "end-end", ...rest } = mergeProps(reactionsProps, props)()

  return { "data-placement": placement, ...rest }
})
