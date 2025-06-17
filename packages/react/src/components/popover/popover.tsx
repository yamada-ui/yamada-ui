import type { PropsWithChildren } from "react"
import type {
  FC,
  HTMLProps,
  HTMLStyledProps,
  SimplePlacement,
  ThemeProps,
} from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { HTMLMotionProps, MotionTransitionProps } from "../motion"
import type { PortalProps } from "../portal"
import type { PopoverStyle } from "./popover.style"
import type { UsePopoverProps, UsePopoverReturn } from "./use-popover"
import { AnimatePresence } from "motion/react"
import { useMemo } from "react"
import { createSlotComponent } from "../../core"
import { cast, runIfFn } from "../../utils"
import { fadeScaleVariants } from "../fade"
import { motion } from "../motion"
import { Portal } from "../portal"
import { slideFadeVariants } from "../slide"
import { popoverStyle } from "./popover.style"
import { usePopover } from "./use-popover"

export interface PopupAnimationProps {
  /**
   * The animation of the element.
   *
   * @default 'scale'
   */
  animationScheme?: "none" | "scale" | SimplePlacement
  /**
   * The animation duration.
   *
   * @default 0.2
   */
  duration?: MotionTransitionProps["duration"]
}

export const getPopupAnimationProps = (
  animationScheme: PopupAnimationProps["animationScheme"] = "scale",
  duration?: PopupAnimationProps["duration"],
) => {
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

export interface PopoverContext
  extends Pick<
      UsePopoverReturn,
      | "getAnchorProps"
      | "getBodyProps"
      | "getContentProps"
      | "getFooterProps"
      | "getHeaderProps"
      | "getPositionerProps"
      | "getTriggerProps"
      | "open"
    >,
    PopupAnimationProps,
    Pick<PopoverRootProps, "withCloseButton"> {}

export interface PopoverRootProps
  extends UsePopoverProps,
    PopupAnimationProps,
    ThemeProps<PopoverStyle> {
  /**
   * The children of the popover.
   */
  children?: ReactNodeOrFunction<{
    open: boolean
    onClose: () => void
    onForceClose: () => void
  }>
  /**
   * The animation duration.
   *
   * @default 0.2
   */
  duration?: PopupAnimationProps["duration"]
  /**
   * If `true`, display the popover close button.
   *
   * @default true
   */
  withCloseButton?: boolean
}

export const {
  ComponentContext: PopoverContext,
  PropsContext: PopoverPropsContext,
  StyleContext,
  useComponentContext: usePopoverContext,
  usePropsContext: usePopoverPropsContext,
  withContext,
  useRootComponentProps,
} = createSlotComponent<PopoverRootProps, PopoverStyle, PopoverContext>(
  "popover",
  popoverStyle,
)

/**
 * `Popover` is a component that floats around an element to display information.
 *
 * @see https://yamada-ui.com/components/popover
 */
export const PopoverRoot: FC<PopoverRootProps> = (props) => {
  const [
    styleContext,
    {
      animationScheme = "scale",
      children,
      duration = 0.1,
      withCloseButton = true,
      ...rest
    },
  ] = useRootComponentProps(props)
  const {
    open,
    getAnchorProps,
    getBodyProps,
    getContentProps,
    getFooterProps,
    getHeaderProps,
    getPositionerProps,
    getTriggerProps,
    onClose: onForceClose,
    onDelayClose: onClose,
  } = usePopover(rest)
  const popoverContext = useMemo(
    () => ({
      animationScheme,
      duration,
      open,
      withCloseButton,
      getAnchorProps,
      getBodyProps,
      getContentProps,
      getFooterProps,
      getHeaderProps,
      getPositionerProps,
      getTriggerProps,
    }),
    [
      withCloseButton,
      open,
      animationScheme,
      duration,
      getAnchorProps,
      getBodyProps,
      getContentProps,
      getFooterProps,
      getHeaderProps,
      getPositionerProps,
      getTriggerProps,
    ],
  )

  return (
    <StyleContext value={styleContext}>
      <PopoverContext value={popoverContext}>
        {runIfFn(children, { open, onClose, onForceClose })}
      </PopoverContext>
    </StyleContext>
  )
}

export interface PopoverTriggerProps extends HTMLStyledProps<"button"> {}

export const PopoverTrigger = withContext<"button", PopoverTriggerProps>(
  "button",
  "trigger",
)({ asChild: true }, (props) => {
  const { getTriggerProps } = usePopoverContext()

  return getTriggerProps(props)
})

export interface PopoverAnchorProps extends HTMLStyledProps {}

export const PopoverAnchor = withContext<"div", PopoverAnchorProps>(
  "div",
  "anchor",
)({ asChild: true }, (props) => {
  const { getAnchorProps } = usePopoverContext()

  return getAnchorProps(props)
})

interface PopoverPositionerProps extends HTMLStyledProps {}

const PopoverPositioner = withContext<"div", PopoverPositionerProps>(
  "div",
  "positioner",
)(undefined, (props) => {
  const { getPositionerProps } = usePopoverContext()

  return getPositionerProps(props)
})

export interface PopoverContentProps
  extends Omit<HTMLMotionProps, "children">,
    PropsWithChildren {
  /**
   * Props for portal component.
   */
  portalProps?: Omit<PortalProps, "children">
}

export const PopoverContent = withContext<"div", PopoverContentProps>(
  ({ portalProps, ...rest }) => {
    const { animationScheme, duration, open, getContentProps } =
      usePopoverContext()

    return (
      <AnimatePresence>
        {open ? (
          <Portal {...portalProps}>
            <PopoverPositioner>
              <motion.div
                {...getPopupAnimationProps(animationScheme, duration)}
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
  const { getHeaderProps } = usePopoverContext()

  return getHeaderProps(props)
})

export interface PopoverBodyProps extends HTMLStyledProps {}

export const PopoverBody = withContext<"div", PopoverBodyProps>("div", "body")(
  undefined,
  (props) => {
    const { getBodyProps } = usePopoverContext()

    return getBodyProps(props)
  },
)

export interface PopoverFooterProps extends HTMLStyledProps {}

export const PopoverFooter = withContext<"div", PopoverFooterProps>(
  "div",
  "footer",
)(undefined, (props) => {
  const { getFooterProps } = usePopoverContext()

  return getFooterProps(props)
})
