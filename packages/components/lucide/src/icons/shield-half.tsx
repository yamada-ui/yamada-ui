import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShieldHalf as LucideShieldHalfIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShieldHalfIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldHalfIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideShieldHalfIcon} {...props} />,
)

/**
 * @deprecated Use `ShieldHalfIcon` instead.
 */
export const ShieldHalf = ShieldHalfIcon
