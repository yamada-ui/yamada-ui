import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Database as LucideDatabaseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DatabaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DatabaseIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDatabaseIcon} {...props} />
))

/**
 * @deprecated Use `DatabaseIcon` instead.
 */
export const Database = DatabaseIcon
