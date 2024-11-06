import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShieldCheck as LucideShieldCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShieldCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideShieldCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ShieldCheckIcon` instead.
 */
export const ShieldCheck = ShieldCheckIcon
