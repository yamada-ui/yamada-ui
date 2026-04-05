"use client"

import type { PropsWithChildren, ReactNode } from "react"
import type { HTMLProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { HTMLMotionPropsWithoutAs } from "../motion"
import type { ActionBarStyle } from "./action-bar.style"
import type { UseActionBarProps, UseActionBarReturn } from "./use-action-bar"
import { AnimatePresence } from "motion/react"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useValue } from "../../hooks/use-value"
import { cast, useSplitChildren } from "../../utils"
import { motion } from "../motion"
import { getPopupAnimationProps, type PopupAnimationProps } from "../popover"
import { Portal, type PortalProps } from "../portal"
import { actionBarStyle } from "./action-bar.style"
import { useActionBar } from "./use-action-bar"

interface ComponentContext
  extends
    Pick<
      UseActionBarReturn,
      "getCloseTriggerProps" | "getContentProps" | "getOpenTriggerProps"
    >,
    Pick<ActionBarRootProps, "animationScheme" | "duration"> {}

export interface ActionBarRootProps
  extends
    Omit<HTMLStyledProps, "content">,
    ThemeProps<ActionBarStyle>,
    UseActionBarProps,
    PopupAnimationProps {
  /**
   * The action bar content to use.
   */
  content?: ReactNode
  /**
   * The action bar trigger to use.
   */
  trigger?: ReactNode
  /**
   * Props to be forwarded to the portal component.
   */
  portalProps?: Omit<PortalProps, "children">
  /**
   * Callback function to run side effects after the action bar has closed.
   */
  onCloseComplete?: () => void
}

const {
  ComponentContext,
  PropsContext: ActionBarPropsContext,
  useComponentContext,
  usePropsContext: useActionBarPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ActionBarRootProps, ActionBarStyle, ComponentContext>(
  "action-bar",
  actionBarStyle,
)

export { ActionBarPropsContext, useActionBarPropsContext }

/**
 * `ActionBar` is a component that is used to display a bottom action bar with a set of actions.
 *
 * @see https://yamada-ui.com/docs/components/action-bar
 */
export const ActionBarRoot = withProvider<
  "div",
  ActionBarRootProps,
  "placement"
>(
  ({
    animationScheme,
    children,
    content: contentProp,
    duration,
    placement: placementProp,
    trigger,
    portalProps,
    onCloseComplete,
    ...rest
  }) => {
    const placement = useValue(placementProp)

    animationScheme ??= placement?.startsWith("start")
      ? "block-start"
      : "block-end"

    const [omittedChildren, openTrigger, content] = useSplitChildren(
      children,
      ActionBarOpenTrigger,
      ActionBarContent,
    )
    const {
      open,
      getCloseTriggerProps,
      getContentProps,
      getOpenTriggerProps,
      getRootProps,
    } = useActionBar(rest)
    const customOpenTrigger = trigger ? (
      <ActionBarOpenTrigger>{trigger}</ActionBarOpenTrigger>
    ) : null
    const customContent = contentProp ? (
      <ActionBarContent>{contentProp}</ActionBarContent>
    ) : null
    const context = useMemo(
      () => ({
        animationScheme,
        duration,
        getCloseTriggerProps,
        getContentProps,
        getOpenTriggerProps,
      }),
      [
        animationScheme,
        duration,
        getCloseTriggerProps,
        getContentProps,
        getOpenTriggerProps,
      ],
    )

    return (
      <ComponentContext value={context}>
        {openTrigger ?? customOpenTrigger}

        <AnimatePresence onExitComplete={onCloseComplete}>
          {open ? (
            <Portal {...portalProps}>
              <styled.div {...getRootProps()}>
                {content ?? customContent ?? omittedChildren}
              </styled.div>
            </Portal>
          ) : null}
        </AnimatePresence>
      </ComponentContext>
    )
  },
  "root",
  { transferProps: ["placement"] },
)()

export interface ActionBarOpenTriggerProps extends HTMLStyledProps<"button"> {}

export const ActionBarOpenTrigger = withContext<
  "button",
  ActionBarOpenTriggerProps
>("button", { name: "OpenTrigger", slot: ["trigger", "open"] })(
  undefined,
  (props) => {
    const { getOpenTriggerProps } = useComponentContext()

    return { asChild: true, ...getOpenTriggerProps(props) }
  },
)

export interface ActionBarCloseTriggerProps extends HTMLStyledProps<"button"> {}

export const ActionBarCloseTrigger = withContext<
  "button",
  ActionBarCloseTriggerProps
>("button", { name: "CloseTrigger", slot: ["trigger", "close"] })(
  undefined,
  (props) => {
    const { getCloseTriggerProps } = useComponentContext()

    return { asChild: true, ...getCloseTriggerProps(props) }
  },
)

export interface ActionBarContentProps
  extends Omit<HTMLStyledProps<"section">, "children">, PropsWithChildren {}

export const ActionBarContent = withContext<"section", ActionBarContentProps>(
  (props) => {
    const { animationScheme, duration, getContentProps } = useComponentContext()

    return (
      <motion.section
        {...getPopupAnimationProps(animationScheme, duration)}
        {...cast<HTMLMotionPropsWithoutAs<"section">>(
          getContentProps(cast<HTMLProps<"section">>(props)),
        )}
      />
    )
  },
  "content",
)()

export interface ActionBarSeparatorProps extends HTMLStyledProps {}

export const ActionBarSeparator = withContext<"div", ActionBarSeparatorProps>(
  "div",
  "separator",
)()
