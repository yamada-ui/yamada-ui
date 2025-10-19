"use client"

import type { FC, PropsWithChildren } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { ReactNodeOrFunction } from "../../utils"
import type { NativePopoverStyle } from "./native-popover.style"
import type {
  UseNativePopoverProps,
  UseNativePopoverReturn,
} from "./use-native-popover"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { cast, runIfFn } from "../../utils"
import { nativePopoverStyle } from "./native-popover.style"
import { useNativePopover } from "./use-native-popover"

interface ComponentContext
  extends Pick<
    UseNativePopoverReturn,
    | "getAnchorProps"
    | "getBodyProps"
    | "getContentProps"
    | "getFooterProps"
    | "getHeaderProps"
    | "getPositionerProps"
    | "getTriggerProps"
  > {}

export interface NativePopoverRootProps
  extends UseNativePopoverProps,
    ThemeProps<NativePopoverStyle> {
  /**
   * The children of the popover.
   */
  children?: ReactNodeOrFunction<{}>
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
    getAnchorProps,
    getBodyProps,
    getContentProps,
    getFooterProps,
    getHeaderProps,
    getPositionerProps,
    getTriggerProps,
  } = useNativePopover(rest)
  const componentContext = useMemo(
    () => ({
      getAnchorProps,
      getBodyProps,
      getContentProps,
      getFooterProps,
      getHeaderProps,
      getPositionerProps,
      getTriggerProps,
    }),
    [
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
      <ComponentContext value={componentContext}>
        {runIfFn(children, {})}
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

interface NativePopoverPositionerProps extends HTMLStyledProps {}

const NativePopoverPositioner = withContext<
  "div",
  NativePopoverPositionerProps
>("div", "positioner")(undefined, (props) => {
  const { getPositionerProps } = useComponentContext()

  return getPositionerProps(props)
})

export interface NativePopoverContentProps
  extends HTMLStyledProps,
    PropsWithChildren {}

export const NativePopoverContent = withContext<
  "div",
  NativePopoverContentProps
>(({ children, ...rest }) => {
  const { getContentProps } = useComponentContext()

  return (
    <NativePopoverPositioner asChild>
      <styled.div {...getContentProps(cast<HTMLStyledProps>(rest))}>
        {children}
      </styled.div>
    </NativePopoverPositioner>
  )
}, "content")()

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

export interface NativePopoverAnchorProps extends HTMLStyledProps {}

export const NativePopoverAnchor = withContext<"div", NativePopoverAnchorProps>(
  "div",
  "anchor",
)({ asChild: true }, (props) => {
  const { getAnchorProps } = useComponentContext()

  return getAnchorProps(props)
})
