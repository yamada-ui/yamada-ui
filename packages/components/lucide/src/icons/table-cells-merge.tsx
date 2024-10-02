import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TableCellsMerge as TableCellsMergeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TableCellsMerge` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableCellsMerge = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TableCellsMergeIcon} {...props} />,
)
