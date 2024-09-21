import { forwardRef } from "@yamada-ui/core"
import { TableCellsSplit as TableCellsSplitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `TableCellsSplit` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableCellsSplit = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TableCellsSplitIcon} {...props} />,
)
