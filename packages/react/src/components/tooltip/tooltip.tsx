"use client"

import type { FC, PropsWithChildren, ReactNode } from "react"
import type { HTMLProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { HTMLMotionProps } from "../motion"
import type { PopupAnimationProps } from "../popover"
import type { PortalProps } from "../portal"
import type { TooltipStyle } from "./tooltip.style"
import type { UseTooltipProps } from "./use-tooltip"
import { AnimatePresence } from "motion/react"
import { createSlotComponent } from "../../core"
import { cast } from "../../utils"
import { motion } from "../motion"
import { getPopupAnimationProps } from "../popover"
import { Portal } from "../portal"
import { tooltipStyle } from "./tooltip.style"
import { useTooltip } from "./use-tooltip"

export interface TooltipProps
  extends UseTooltipProps,
    PropsWithChildren,
    PopupAnimationProps,
    ThemeProps<TooltipStyle> {
  /**
   * The content of the tooltip.
   */
  content?: ReactNode
  /**
   * The animation duration.
   *
   * @default 0.1
   */
  duration?: PopupAnimationProps["duration"]
  /**
   * Props for content element.
   */
  contentProps?: HTMLMotionProps
  /**
   * Props for portal component.
   */
  portalProps?: Omit<PortalProps, "children">
}

const {
  PropsContext: TooltipPropsContext,
  StyleContext,
  usePropsContext: useTooltipPropsContext,
  withContext,
  useRootComponentProps,
} = createSlotComponent<TooltipProps, TooltipStyle>("tooltip", tooltipStyle)

export { TooltipPropsContext, useTooltipPropsContext }

/**
 * `Tooltip` is a component that displays short information, such as supplementary details for an element.
 *
 * @see https://yamada-ui.com/components/tooltip
 */
export const Tooltip: FC<TooltipProps> = (props) => {
  const [
    context,
    {
      animationScheme = "scale",
      children,
      content,
      duration = 0.1,
      contentProps,
      portalProps,
      ...rest
    },
  ] = useRootComponentProps(props)
  const { open, getContentProps, getPositionerProps, getTriggerProps } =
    useTooltip(rest)

  if (!content) return children

  return (
    <StyleContext value={context}>
      <TooltipTrigger asChild {...getTriggerProps()}>
        {children}
      </TooltipTrigger>

      <AnimatePresence>
        {open ? (
          <Portal {...portalProps}>
            <TooltipPositioner {...getPositionerProps()}>
              <TooltipContent
                {...getPopupAnimationProps(animationScheme, duration)}
                {...cast<HTMLMotionProps>(
                  getContentProps(cast<HTMLProps>(contentProps)),
                )}
              >
                {content}
              </TooltipContent>
            </TooltipPositioner>
          </Portal>
        ) : null}
      </AnimatePresence>
    </StyleContext>
  )
}

interface TooltipPositionerProps extends HTMLStyledProps {}

const TooltipPositioner = withContext<"div", TooltipPositionerProps>(
  "div",
  "positioner",
)()

interface TooltipTriggerProps extends HTMLStyledProps<"button"> {}

const TooltipTrigger = withContext<"button", TooltipTriggerProps>(
  "button",
  "trigger",
)()

interface TooltipContentProps
  extends Omit<HTMLMotionProps, "children" | "offset" | "transform"> {}

const TooltipContent = withContext<"div", TooltipContentProps>(
  motion.div,
  "content",
)()
