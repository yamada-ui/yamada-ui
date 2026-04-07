"use client"

import type { FC, PropsWithChildren } from "react"
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
import { createSlotComponent } from "../../core"
import { useValue } from "../../hooks/use-value"
import { cast, runIfFn } from "../../utils"
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

  return {
    flip,
    gutter,
    matchWidth,
    placement,
    strategy,
  }
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
    UsePopupAnimationProps {}

export interface PopoverRootProps
  extends
    Merge<UsePopoverProps, UsePopoverStyleProps>,
    UsePopupAnimationProps,
    ThemeProps<PopoverStyle> {
  /**
   * The children of the popover.
   */
  children?: ReactNodeOrFunction<{
    open: boolean
    onClose: () => void
  }>
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
  const [styleContext, { animationScheme, children, duration, ...rest }] =
    useRootComponentProps({ ...props, ...styleProps })
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
      getAnchorProps,
      getBodyProps,
      getCloseTriggerProps,
      getContentProps,
      getFooterProps,
      getHeaderProps,
      getPositionerProps,
      getTriggerProps,
    }),
    [
      open,
      animationScheme,
      duration,
      getAnchorProps,
      getBodyProps,
      getCloseTriggerProps,
      getContentProps,
      getFooterProps,
      getHeaderProps,
      getPositionerProps,
      getTriggerProps,
    ],
  )

  return (
    <StyleContext value={styleContext}>
      <ComponentContext value={componentContext}>
        {runIfFn(children, { open, onClose })}
      </ComponentContext>
    </StyleContext>
  )
}

export interface PopoverTriggerProps extends HTMLStyledProps<"button"> {}

export const PopoverTrigger = withContext<"button", PopoverTriggerProps>(
  "button",
  "trigger",
)({ asChild: true }, (props) => {
  const { getTriggerProps } = useComponentContext()

  return getTriggerProps(props)
})

export interface PopoverCloseTriggerProps extends HTMLStyledProps<"button"> {}

export const PopoverCloseTrigger = withContext<
  "button",
  PopoverCloseTriggerProps
>("button", { name: "CloseTrigger", slot: ["trigger", "close"] })(
  { asChild: true },
  (props) => {
    const { getCloseTriggerProps } = useComponentContext()

    return getCloseTriggerProps(props)
  },
)

export interface PopoverAnchorProps extends HTMLStyledProps {}

export const PopoverAnchor = withContext<"div", PopoverAnchorProps>(
  "div",
  "anchor",
)({ asChild: true }, (props) => {
  const { getAnchorProps } = useComponentContext()

  return getAnchorProps(props)
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
}

export const PopoverContent = withContext<"div", PopoverContentProps>(
  ({ portalProps, ...rest }) => {
    const { animationScheme, duration, open, getContentProps } =
      useComponentContext()
    const popupAnimationProps = usePopupAnimationProps({
      animationScheme,
      duration,
    })

    return (
      <AnimatePresence>
        {open ? (
          <Portal {...portalProps}>
            <PopoverPositioner>
              <motion.div
                {...popupAnimationProps}
                {...cast<HTMLMotionProps>(
                  getContentProps(cast<HTMLProps>(rest)),
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

export interface PopoverHeaderProps extends HTMLStyledProps {}

export const PopoverHeader = withContext<"div", PopoverHeaderProps>(
  "div",
  "header",
)(undefined, (props) => {
  const { getHeaderProps } = useComponentContext()

  return getHeaderProps(props)
})

export interface PopoverBodyProps extends HTMLStyledProps {}

export const PopoverBody = withContext<"div", PopoverBodyProps>("div", "body")(
  undefined,
  (props) => {
    const { getBodyProps } = useComponentContext()

    return getBodyProps(props)
  },
)

export interface PopoverFooterProps extends HTMLStyledProps {}

export const PopoverFooter = withContext<"div", PopoverFooterProps>(
  "div",
  "footer",
)(undefined, (props) => {
  const { getFooterProps } = useComponentContext()

  return getFooterProps(props)
})
