import { forwardRef } from "@yamada-ui/core"
import type { HTMLUIProps } from "@yamada-ui/core"
import { MenuItem, MenuOptionItem } from "@yamada-ui/react"
import type { MenuOptionItemProps } from "@yamada-ui/react"
import type { ReactElement } from "react"

export type ContextMenuItemProps = HTMLUIProps<"button"> & {
  /**
   * If `true`, the menu item will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, the menu item will be focusable.
   *
   * @default false
   */
  isFocusable?: boolean
  /**
   * If `true`, the list element will be closed when selected.
   *
   * @default false
   */
  closeOnSelect?: boolean
  /**
   * The menu item icon to use.
   */
  icon?: ReactElement
  /**
   * Right-aligned label text content, useful for displaying hotkeys.
   */
  command?: string
}
export const ContextMenuItem = forwardRef<ContextMenuItemProps, "button">(
  ({ ...rest }, ref) => {
    return <MenuItem ref={ref} {...rest} />
  },
)

export type ContextMenuOptionItemProps = MenuOptionItemProps
export const ContextMenuOptionItem = forwardRef<
  ContextMenuOptionItemProps,
  "button"
>(({ ...rest }, ref) => {
  return <MenuOptionItem ref={ref} {...rest} />
})
