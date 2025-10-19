"use client"

import type { FC, PropsWithChildren } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { NativePopoverStyle } from "./native-popover.style"
import type { UseNativePopoverReturn } from "./use-native-popover"
import { useMemo } from "react"
import { createSlotComponent } from "../../core"
import { runIfFn } from "../../utils"
import { nativePopoverStyle } from "./native-popover.style"
import { useNativePopover } from "./use-native-popover"

interface ComponentContext
  extends Pick<
    UseNativePopoverReturn,
    | "getBodyProps"
    | "getContentProps"
    | "getFooterProps"
    | "getHeaderProps"
    | "getTriggerProps"
    | "open"
  > {}

export interface NativePopoverRootProps extends ThemeProps<NativePopoverStyle> {
  /**
   * The children of the popover.
   */
  children?: ReactNodeOrFunction<{
    open: boolean
  }>
  /**
   * If `true`, the popover will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The mode of the popover.
   *
   * @default 'auto'
   */
  popover?: "auto" | "manual"
}

const {
  ComponentContext,
  PropsContext: NativePopoverPropsContext,
  StyleContext,
  useComponentContext,
  usePropsContext: useNativePopoverPropsContext,
  withContext,
  useRootComponentProps,
} = createSlotComponent<
  NativePopoverRootProps,
  NativePopoverStyle,
  ComponentContext
>("native-popover", nativePopoverStyle)

export { NativePopoverPropsContext, useNativePopoverPropsContext }

/**
 * `NativePopover` is a component that floats around an element to display information using the native HTML Popover API.
 *
 * @see https://yamada-ui.com/docs/components/native-popover
 */
export const NativePopoverRoot: FC<NativePopoverRootProps> = (props) => {
  const [styleContext, { children, ...rest }] = useRootComponentProps(props)
  const {
    open,
    getBodyProps,
    getContentProps,
    getFooterProps,
    getHeaderProps,
    getTriggerProps,
  } = useNativePopover(rest)
  const componentContext = useMemo(
    () => ({
      open,
      getBodyProps,
      getContentProps,
      getFooterProps,
      getHeaderProps,
      getTriggerProps,
    }),
    [
      open,
      getBodyProps,
      getContentProps,
      getFooterProps,
      getHeaderProps,
      getTriggerProps,
    ],
  )

  return (
    <StyleContext value={styleContext}>
      <ComponentContext value={componentContext}>
        {runIfFn(children, { open })}
      </ComponentContext>
    </StyleContext>
  )
}

export interface NativePopoverTriggerProps extends HTMLStyledProps<"button"> {}

export const NativePopoverTrigger = withContext<
  "button",
  NativePopoverTriggerProps
>("button", "trigger")({ asChild: true }, (props) => {
  const { getTriggerProps } = useComponentContext()

  return getTriggerProps(props)
})

export interface NativePopoverContentProps
  extends HTMLStyledProps,
    PropsWithChildren {}

export const NativePopoverContent = withContext<
  "div",
  NativePopoverContentProps
>("div", "content")(undefined, (props) => {
  const { getContentProps } = useComponentContext()

  return getContentProps(props)
})

export interface NativePopoverHeaderProps extends HTMLStyledProps {}

export const NativePopoverHeader = withContext<"div", NativePopoverHeaderProps>(
  "div",
  "header",
)(undefined, (props) => {
  const { getHeaderProps } = useComponentContext()

  return getHeaderProps(props)
})

export interface NativePopoverBodyProps extends HTMLStyledProps {}

export const NativePopoverBody = withContext<"div", NativePopoverBodyProps>(
  "div",
  "body",
)(undefined, (props) => {
  const { getBodyProps } = useComponentContext()

  return getBodyProps(props)
})

export interface NativePopoverFooterProps extends HTMLStyledProps {}

export const NativePopoverFooter = withContext<"div", NativePopoverFooterProps>(
  "div",
  "footer",
)(undefined, (props) => {
  const { getFooterProps } = useComponentContext()

  return getFooterProps(props)
})
