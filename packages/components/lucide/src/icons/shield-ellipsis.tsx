import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShieldEllipsis as LucideShieldEllipsisIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShieldEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldEllipsisIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideShieldEllipsisIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ShieldEllipsisIcon` instead.
 */
export const ShieldEllipsis = ShieldEllipsisIcon
