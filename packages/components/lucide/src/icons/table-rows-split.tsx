import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TableRowsSplit as LucideTableRowsSplitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TableRowsSplitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableRowsSplitIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTableRowsSplitIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TableRowsSplitIcon` instead.
 */
export const TableRowsSplit = TableRowsSplitIcon
