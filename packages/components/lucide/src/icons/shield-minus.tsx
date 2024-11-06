import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShieldMinus as LucideShieldMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShieldMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideShieldMinusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ShieldMinusIcon` instead.
 */
export const ShieldMinus = ShieldMinusIcon
