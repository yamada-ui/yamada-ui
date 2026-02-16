"use client"

import type { ForwardedRef, ReactElement } from "react"
import type {
  HTMLStyledProps,
  HTMLStyledPropsWithoutAs,
  ThemeProps,
} from "../../core"
import type { ResizableStyle } from "./resizable.style"
import type {
  UseResizableItemProps,
  UseResizableProps,
  UseResizableTriggerProps,
} from "./use-resizable"
import { useMemo } from "react"
import { Group, Panel, Separator } from "react-resizable-panels"
import { createSlotComponent, styled } from "../../core"
import { useValue } from "../../hooks/use-value"
import { resizableStyle } from "./resizable.style"
import {
  ResizableContext,
  useResizable,
  useResizableItem,
  useResizableTrigger,
} from "./use-resizable"

/**
 * `Resizable` is accessible resizable panel groups and layouts with keyboard support.
 *
 * @see https://yamada-ui.com/docs/components/resizable
 */
export interface ResizableRootProps
  extends
    HTMLStyledProps,
    ThemeProps<ResizableStyle>,
    Omit<UseResizableProps, "orientation"> {
  /**
   * Ref for resizable root element.
   */
  rootRef?: ForwardedRef<HTMLDivElement>
}

const {
  PropsContext: ResizablePropsContext,
  usePropsContext: useResizablePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ResizableRootProps, ResizableStyle>(
  "resizable",
  resizableStyle,
)

export { ResizablePropsContext, useResizablePropsContext }

export const ResizableRoot = withProvider<
  "div",
  ResizableRootProps,
  "orientation"
>(
  ({ children, orientation: orientationProp, rootRef, ...rest }) => {
    const computedOrientation = useValue(orientationProp)
    const { disabled, groupRef, orientation, getGroupProps, getRootProps } =
      useResizable({ orientation: computedOrientation, ...rest })

    const context = useMemo(
      () => ({ disabled, groupRef, orientation }),
      [disabled, orientation, groupRef],
    )

    return (
      <ResizableContext value={context}>
        <styled.div {...getRootProps({ ref: rootRef })}>
          <Group {...getGroupProps()}>{children}</Group>
        </styled.div>
      </ResizableContext>
    )
  },
  "root",
  { transferProps: ["orientation"] },
)()

export interface ResizableItemProps
  extends HTMLStyledPropsWithoutAs, UseResizableItemProps {}

export const ResizableItem = withContext<"div", ResizableItemProps>((props) => {
  const { getItemProps } = useResizableItem(props)

  return <styled.div as={Panel} {...getItemProps()} />
}, "item")()

export interface ResizableTriggerProps
  extends HTMLStyledPropsWithoutAs, UseResizableTriggerProps {
  /**
   * The resizable trigger icon to use.
   */
  icon?: ReactElement
  /**
   * Props for resizable trigger icon component.
   */
  iconProps?: HTMLStyledProps
}

export const ResizableTrigger = withContext<"div", ResizableTriggerProps>(
  ({ children, icon, iconProps, ...rest }) => {
    const { getIconProps, getTriggerProps } = useResizableTrigger(rest)

    return (
      <styled.div as={Separator} {...getTriggerProps()}>
        {icon ? (
          <ResizableIcon {...getIconProps(iconProps)}>{icon}</ResizableIcon>
        ) : null}

        {children}
      </styled.div>
    )
  },
  "trigger",
)()

interface ResizableIconProps extends HTMLStyledProps {}

const ResizableIcon = withContext<"div", ResizableIconProps>("div", "icon")()
