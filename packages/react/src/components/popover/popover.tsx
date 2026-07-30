"use client"

import type { FC, PropsWithChildren, ReactNode } from "react"
import type {
  HTMLProps,
  HTMLStyledProps,
  SimplePlacement,
  StyleValue,
  ThemeProps,
} from "../../core"
import type { Merge, ReactNodeOrFunction } from "../../utils"
import type { HTMLMotionProps, MotionTransitionProps } from "../motion"
import type { PortalProps } from "../portal"
import type { PopoverStyle } from "./popover.style"
import type { UsePopoverProps, UsePopoverReturn } from "./use-popover"
import { AnimatePresence } from "motion/react"
import { useMemo } from "react"
import { createSlotComponent, mergeProps } from "../../core"
import { useValue } from "../../hooks/use-value"
import {
  cast,
  filterUndefined,
  isFunction,
  runIfFn,
  useSplitChildren,
  wrapOrPassProps,
} from "../../utils"
import { fadeScaleVariants } from "../fade-scale"
import { motion } from "../motion"
import { Portal } from "../portal"
import { slideFadeVariants } from "../slide-fade"
import { popoverStyle } from "./popover.style"
import { usePopover } from "./use-popover"

export interface UsePopupAnimationProps {
  /**
   * The animation of the element.
   *
   * @default 'scale'
   */
  animationScheme?: StyleValue<"none" | "scale" | SimplePlacement>
  /**
   * The animation duration.
   *
   * @default 0.1
   */
  duration?: StyleValue<MotionTransitionProps["duration"]>
}

export const usePopupAnimationProps = (props: UsePopupAnimationProps = {}) => {
  const animationScheme = useValue(props.animationScheme ?? "scale")
  const duration = useValue(props.duration ?? 0.1)
  const sharedProps = { animate: "enter", exit: "exit", initial: "exit" }

  switch (animationScheme) {
    case "scale":
      return {
        ...sharedProps,
        custom: { duration, reverse: true, scale: 0.95 },
        variants: fadeScaleVariants,
      }
    case "block-start":
      return {
        ...sharedProps,
        custom: { duration, offsetY: -16, reverse: true },
        variants: slideFadeVariants,
      }
    case "inline-end":
      return {
        ...sharedProps,
        custom: { duration, offsetX: 16, reverse: true },
        variants: slideFadeVariants,
      }
    case "inline-start":
      return {
        ...sharedProps,
        custom: { duration, offsetX: -16, reverse: true },
        variants: slideFadeVariants,
      }
    case "block-end":
      return {
        ...sharedProps,
        custom: { duration, offsetY: 16, reverse: true },
        variants: slideFadeVariants,
      }
    default:
      return {}
  }
}

export interface UsePopoverStyleProps {
  /**
   * If `true`, the popper will change its placement and flip when it's about to overflow its boundary area.
   *
   * @default true
   */
  flip?: StyleValue<UsePopoverProps["flip"]>
  /**
   * The distance or margin between the reference and popper.
   * It is used internally to create an `offset` modifier.
   *
   * @default 8
   */
  gutter?: StyleValue<UsePopoverProps["gutter"]>
  /**
   * If `true`, the popper will match the width of the reference at all times.
   * It's useful for `autocomplete`, `date-picker` and `select` patterns.
   *
   * @default false
   */
  matchWidth?: StyleValue<UsePopoverProps["matchWidth"]>
  /**
   * The placement of the popper relative to its reference.
   *
   * @default 'end'
   */
  placement?: StyleValue<UsePopoverProps["placement"]>
  /**
   * The CSS positioning strategy to use.
   *
   * @default 'absolute'
   */
  strategy?: StyleValue<UsePopoverProps["strategy"]>
}

export const usePopoverStyleProps = (props: UsePopoverStyleProps = {}) => {
  const placement = useValue(props.placement)
  const gutter = useValue(props.gutter)
  const matchWidth = useValue(props.matchWidth)
  const strategy = useValue(props.strategy)
  const flip = useValue(props.flip)

  return useMemo(
    () => filterUndefined({ flip, gutter, matchWidth, placement, strategy }),
    [flip, gutter, matchWidth, placement, strategy],
  )
}

interface ComponentContext
  extends
    Pick<
      UsePopoverReturn,
      | "getAnchorProps"
      | "getBodyProps"
      | "getCloseTriggerProps"
      | "getContentProps"
      | "getFooterProps"
      | "getHeaderProps"
      | "getPositionerProps"
      | "getTriggerProps"
      | "open"
    >,
    UsePopupAnimationProps,
    Pick<
      PopoverRootProps,
      | "anchorProps"
      | "bodyProps"
      | "closeTriggerProps"
      | "contentProps"
      | "footerProps"
      | "headerProps"
      | "triggerProps"
    > {}

export interface PopoverRootProps
  extends
    Merge<UsePopoverProps, UsePopoverStyleProps>,
    UsePopupAnimationProps,
    ThemeProps<PopoverStyle>,
    ShorthandPopoverContentProps {
  /**
   * The popover anchor to use.
   */
  anchor?: ReactNode
  /**
   * The children of the popover.
   */
  children?: ReactNodeOrFunction<{
    open: boolean
    onClose: () => void
  }>
  /**
   * The popover trigger to use.
   */
  trigger?: ReactNode
  /**
   * Props for anchor element.
   */
  anchorProps?: Omit<PopoverAnchorProps, "asChild" | "children">
  /**
   * Props for body element.
   */
  bodyProps?: Omit<PopoverBodyProps, "children">
  /**
   * Props for close trigger element.
   */
  closeTriggerProps?: Omit<PopoverCloseTriggerProps, "asChild" | "children">
  /**
   * Props for content element.
   */
  contentProps?: Omit<PopoverContentProps, "children">
  /**
   * Props for footer element.
   */
  footerProps?: Omit<PopoverFooterProps, "children">
  /**
   * Props for header element.
   */
  headerProps?: Omit<PopoverHeaderProps, "children">
  /**
   * Props for trigger element.
   */
  triggerProps?: Omit<PopoverTriggerProps, "asChild" | "children">
}

const {
  ComponentContext,
  PropsContext: PopoverPropsContext,
  StyleContext,
  useComponentContext,
  usePropsContext: usePopoverPropsContext,
  withContext,
  useRootComponentProps,
} = createSlotComponent<PopoverRootProps, PopoverStyle, ComponentContext>(
  "popover",
  popoverStyle,
)

export { PopoverPropsContext, usePopoverPropsContext }

/**
 * `Popover` is a component that floats around an element to display information.
 *
 * @see https://yamada-ui.com/docs/components/popover
 */
export const PopoverRoot: FC<PopoverRootProps> = (props) => {
  const styleProps = usePopoverStyleProps(props)
  const [
    styleContext,
    {
      anchor: anchorProp,
      animationScheme,
      body,
      children,
      duration,
      footer,
      header,
      trigger: triggerProp,
      anchorProps,
      bodyProps,
      closeTriggerProps,
      contentProps,
      footerProps,
      headerProps,
      triggerProps,
      ...rest
    },
  ] = useRootComponentProps({ ...props, ...styleProps })
  const [omittedChildren, trigger, anchor, customContent] = useSplitChildren(
    isFunction(children) ? undefined : children,
    PopoverTrigger,
    PopoverAnchor,
    PopoverContent,
  )
  const {
    open,
    getAnchorProps,
    getBodyProps,
    getCloseTriggerProps,
    getContentProps,
    getFooterProps,
    getHeaderProps,
    getPositionerProps,
    getTriggerProps,
    onClose,
  } = usePopover(rest)
  const componentContext = useMemo(
    () => ({
      animationScheme,
      duration,
      open,
      anchorProps,
      bodyProps,
      closeTriggerProps,
      contentProps,
      footerProps,
      getAnchorProps,
      getBodyProps,
      getCloseTriggerProps,
      getContentProps,
      getFooterProps,
      getHeaderProps,
      getPositionerProps,
      getTriggerProps,
      headerProps,
      triggerProps,
    }),
    [
      open,
      animationScheme,
      anchorProps,
      bodyProps,
      closeTriggerProps,
      contentProps,
      duration,
      footerProps,
      headerProps,
      getAnchorProps,
      getBodyProps,
      getCloseTriggerProps,
      getContentProps,
      getFooterProps,
      getHeaderProps,
      getPositionerProps,
      getTriggerProps,
      triggerProps,
    ],
  )
  const customAnchor = anchorProp ? (
    <PopoverAnchor>{anchorProp}</PopoverAnchor>
  ) : null
  const customTrigger = triggerProp ? (
    <PopoverTrigger>{triggerProp}</PopoverTrigger>
  ) : null
  const customContentProp =
    header !== undefined || body !== undefined || footer !== undefined ? (
      <ShorthandPopoverContent body={body} footer={footer} header={header} />
    ) : null

  return (
    <StyleContext value={styleContext}>
      <ComponentContext value={componentContext}>
        {isFunction(children) ? (
          runIfFn(children, { open, onClose })
        ) : (
          <>
            {anchor ?? customAnchor}
            {trigger ?? customTrigger}
            {omittedChildren}
            {customContent ?? customContentProp}
          </>
        )}
      </ComponentContext>
    </StyleContext>
  )
}

export interface PopoverTriggerProps extends HTMLStyledProps<"button"> {}

export const PopoverTrigger = withContext<"button", PopoverTriggerProps>(
  "button",
  "trigger",
)({ asChild: true }, (props) => {
  const { getTriggerProps, triggerProps } = useComponentContext()

  return getTriggerProps(mergeProps(triggerProps, props)())
})

export interface PopoverCloseTriggerProps extends HTMLStyledProps<"button"> {}

export const PopoverCloseTrigger = withContext<
  "button",
  PopoverCloseTriggerProps
>("button", { name: "CloseTrigger", slot: ["trigger", "close"] })(
  { asChild: true },
  (props) => {
    const { closeTriggerProps, getCloseTriggerProps } = useComponentContext()

    return getCloseTriggerProps(mergeProps(closeTriggerProps, props)())
  },
)

export interface PopoverAnchorProps extends HTMLStyledProps {}

export const PopoverAnchor = withContext<"div", PopoverAnchorProps>(
  "div",
  "anchor",
)({ asChild: true }, (props) => {
  const { anchorProps, getAnchorProps } = useComponentContext()

  return getAnchorProps(mergeProps(anchorProps, props)())
})

interface PopoverPositionerProps extends HTMLStyledProps {}

const PopoverPositioner = withContext<"div", PopoverPositionerProps>(
  "div",
  "positioner",
)(undefined, (props) => {
  const { getPositionerProps } = useComponentContext()

  return getPositionerProps(props)
})

export interface PopoverContentProps
  extends Omit<HTMLMotionProps, "children">, PropsWithChildren {
  /**
   * Props for portal component.
   */
  portalProps?: Omit<PortalProps, "children">
  /**
   * Props for positioner component.
   */
  positionerProps?: Omit<PopoverPositionerProps, "children">
}

export const PopoverContent = withContext<"div", PopoverContentProps>(
  ({
    portalProps: portalPropsProp,
    positionerProps: positionerPropsProp,
    ...rest
  }) => {
    const {
      animationScheme,
      duration,
      open,
      contentProps: { portalProps, positionerProps, ...contentProps } = {},
      getContentProps,
    } = useComponentContext()
    const popupAnimationProps = usePopupAnimationProps({
      animationScheme,
      duration,
    })

    return (
      <AnimatePresence>
        {open ? (
          <Portal {...mergeProps(portalProps, portalPropsProp)()}>
            <PopoverPositioner
              {...mergeProps(positionerProps, positionerPropsProp)()}
            >
              <motion.div
                {...popupAnimationProps}
                {...cast<HTMLMotionProps>(
                  getContentProps(
                    cast<HTMLProps>(mergeProps(contentProps, rest)()),
                  ),
                )}
              />
            </PopoverPositioner>
          </Portal>
        ) : null}
      </AnimatePresence>
    )
  },
  "content",
)()

interface ShorthandPopoverContentProps {
  /**
   * The popover body to use.
   */
  body?: PopoverBodyProps | ReactNode
  /**
   * The popover footer to use.
   */
  footer?: PopoverFooterProps | ReactNode
  /**
   * The popover header to use.
   */
  header?: PopoverHeaderProps | ReactNode
}

const ShorthandPopoverContent: FC<ShorthandPopoverContentProps> = ({
  body,
  footer,
  header,
}) => {
  const customHeader = wrapOrPassProps(PopoverHeader, header)
  const customBody = wrapOrPassProps(PopoverBody, body)
  const customFooter = wrapOrPassProps(PopoverFooter, footer)

  return (
    <PopoverContent>
      {customHeader}
      {customBody}
      {customFooter}
    </PopoverContent>
  )
}

export interface PopoverHeaderProps extends HTMLStyledProps {}

export const PopoverHeader = withContext<"div", PopoverHeaderProps>(
  "div",
  "header",
)(undefined, (props) => {
  const { getHeaderProps, headerProps } = useComponentContext()

  return getHeaderProps(mergeProps(headerProps, props)())
})

export interface PopoverBodyProps extends HTMLStyledProps {}

export const PopoverBody = withContext<"div", PopoverBodyProps>("div", "body")(
  undefined,
  (props) => {
    const { bodyProps, getBodyProps } = useComponentContext()

    return getBodyProps(mergeProps(bodyProps, props)())
  },
)

export interface PopoverFooterProps extends HTMLStyledProps {}

export const PopoverFooter = withContext<"div", PopoverFooterProps>(
  "div",
  "footer",
)(undefined, (props) => {
  const { footerProps, getFooterProps } = useComponentContext()

  return getFooterProps(mergeProps(footerProps, props)())
})
