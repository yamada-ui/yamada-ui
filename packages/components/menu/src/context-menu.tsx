import type { ThemeProps } from "@yamada-ui/core"
import type { FC } from "react"
import type { MenuProps } from "./menu"
import { omitThemeProps, useComponentMultiStyle } from "@yamada-ui/core"
import { Menu } from "./menu"
import { ContextMenuProvider } from "./menu-context"

export interface ContextMenuProps
  extends Omit<MenuProps, "trigger">,
    ThemeProps<"ContextMenu"> {}

/**
 * `ContextMenu` is triggered by a right click and displays a menu at the pointer's position.
 *
 * @see Docs https://yamada-ui.com/components/overlay/context-menu
 */
export const ContextMenu: FC<ContextMenuProps> = (props) => {
  const [styles, mergedProps] = useComponentMultiStyle("ContextMenu", props)
  const { ...rest } = omitThemeProps(mergedProps)

  return (
    <ContextMenuProvider value={{ styles }}>
      <Menu trigger="contextmenu" {...rest} />
    </ContextMenuProvider>
  )
}
