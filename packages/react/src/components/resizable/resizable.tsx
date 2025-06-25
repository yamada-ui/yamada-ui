"use client"

import type { FC, ForwardedRef, ReactElement } from "react"
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
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
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
 * @see https://yamada-ui.com/components/resizable
 */
export interface ResizableRootProps
  extends HTMLStyledProps,
    ThemeProps<ResizableStyle>,
    Omit<UseResizableProps, "orientation"> {
  /**
   * Ref for resizable root element.
   */
  rootRef?: ForwardedRef<HTMLDivElement>
}

export const {
  PropsContext: ResizablePropsContext,
  usePropsContext: useResizablePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ResizableRootProps, ResizableStyle>(
  "resizable",
  resizableStyle,
)

export const ResizableRoot: FC<ResizableRootProps> = withProvider(
  ({ children, orientation: orientationProp, rootRef, ...rest }) => {
    const computedOrientation = useValue(orientationProp)
    const { controlRef, disabled, orientation, getGroupProps, getRootProps } =
      useResizable({
        ...rest,
        orientation: computedOrientation,
      })

    const context = useMemo(
      () => ({ controlRef, disabled, orientation }),
      [disabled, orientation, controlRef],
    )

    return (
      <ResizableContext value={context}>
        <styled.div {...getRootProps({ ref: rootRef })}>
          <PanelGroup {...getGroupProps()}>{children}</PanelGroup>
        </styled.div>
      </ResizableContext>
    )
  },
  "root",
  { transferProps: ["orientation"] },
)()

const StyledPanel = styled(Panel, { forwardProps: ["order"] })

export interface ResizableItemProps
  extends Omit<HTMLStyledPropsWithoutAs, "order">,
    UseResizableItemProps {}

export const ResizableItem = withContext<"div", ResizableItemProps>((props) => {
  const { getItemProps } = useResizableItem(props)

  return <StyledPanel {...getItemProps()} />
}, "item")()

export interface ResizableTriggerProps
  extends HTMLStyledPropsWithoutAs,
    UseResizableTriggerProps {
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
      <styled.div as={PanelResizeHandle} {...getTriggerProps()}>
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
