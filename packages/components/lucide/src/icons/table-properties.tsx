import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TableProperties as LucideTablePropertiesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TablePropertiesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TablePropertiesIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTablePropertiesIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TablePropertiesIcon` instead.
 */
export const TableProperties = TablePropertiesIcon
