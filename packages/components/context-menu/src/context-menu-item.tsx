import { forwardRef } from "@yamada-ui/core"
import type { HTMLUIProps } from "@yamada-ui/core"
import { MenuItem } from "@yamada-ui/react"

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
