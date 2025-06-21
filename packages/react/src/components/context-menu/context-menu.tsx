import type { MouseEvent } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { ContextMenuStyle } from "./context-menu.style"
import { useState } from "react"
import { createSlotComponent, styled } from "../../core"
import { handlerAll } from "../../utils"
import { Menu } from "../menu"
import { Popover } from "../popover"
import { contextMenuStyle } from "./context-menu.style"

export interface ContextMenuRootProps
  extends Omit<Menu.RootProps, "trigger">,
    ThemeProps<ContextMenuStyle> {}

export const {
  ComponentContext: ContextMenuContext,
  PropsContext: ContextMenuPropsContext,
  useComponentContext: useContextMenuContext,
  usePropsContext: useContextMenuPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ContextMenuRootProps, ContextMenuStyle>(
  "context-menu",
  contextMenuStyle,
)

/**
 * `ContextMenu` is triggered by a right click and displays a menu at the pointer's position.
 *
 * @see https://yamada-ui.com/components/context-menu
 */
export const ContextMenuRoot = withProvider<
  typeof Menu.Root,
  ContextMenuRootProps
>(Menu.Root, "root")(undefined, (props) => ({
  trigger: "contextmenu",
  ...props,
}))

interface Position {
  left: number
  top: number
}

export interface ContextMenuTriggerProps extends HTMLStyledProps {}

export const ContextMenuTrigger = withContext<"div", ContextMenuTriggerProps>(
  ({ children, ...rest }) => {
    const [position, setPosition] = useState<Position>({ left: 0, top: 0 })

    const onContextMenu = (ev: MouseEvent) => {
      setPosition({ left: ev.pageX, top: ev.pageY })
    }

    return (
      <>
        <Popover.Anchor>
          <ContextMenuAnchor {...position} />
        </Popover.Anchor>

        <Popover.Trigger>
          <styled.div
            aria-haspopup="menu"
            role="application"
            {...rest}
            onContextMenu={handlerAll(rest.onContextMenu, onContextMenu)}
          >
            {children}
          </styled.div>
        </Popover.Trigger>
      </>
    )
  },
  "trigger",
)()

interface ContextMenuAnchorProps extends HTMLStyledProps {}

const ContextMenuAnchor = withContext<"div", ContextMenuAnchorProps>(
  "div",
  "anchor",
)()
