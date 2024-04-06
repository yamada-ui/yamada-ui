import { forwardRef } from "@yamada-ui/core"
import type { HTMLUIProps } from "@yamada-ui/core"
import { MenuItem, MenuOptionItem } from "@yamada-ui/react"
import type { MenuOptionItemProps } from "@yamada-ui/react"

type ContextMenuItemProps = HTMLUIProps<"button"> & {
  /**
   * If `true`, the list element will be closed when selected.
   *
   * @default false
   */
  closeOnSelect?: boolean
}
export const ContextMenuItem = forwardRef<ContextMenuItemProps, "button">(
  ({ ...rest }, ref) => {
    return <MenuItem ref={ref} {...rest} />
  },
)

type ContextMenuOptionItemProps = MenuOptionItemProps
export const ContextMenuOptionItem = forwardRef<
  ContextMenuOptionItemProps,
  "button"
>(({ ...rest }, ref) => {
  return <MenuOptionItem ref={ref} {...rest} />
})
