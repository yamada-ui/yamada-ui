import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Table as LucideTableIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TableIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTableIcon} {...props} />
))

/**
 * @deprecated Use `TableIcon` instead.
 */
export const Table = TableIcon
