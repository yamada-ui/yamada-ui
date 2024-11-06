import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tablets as LucideTabletsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TabletsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TabletsIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTabletsIcon} {...props} />
))

/**
 * @deprecated Use `TabletsIcon` instead.
 */
export const Tablets = TabletsIcon
