import { forwardRef } from "@yamada-ui/core"
import { TableCellsMerge as TableCellsMergeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TableCellsMergeProps = LucideIconProps

/**
 * `TableCellsMerge` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableCellsMerge = forwardRef<TableCellsMergeProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TableCellsMergeIcon} {...props} />,
)
