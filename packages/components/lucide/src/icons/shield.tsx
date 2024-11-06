import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Shield as LucideShieldIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShieldIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideShieldIcon} {...props} />
))

/**
 * @deprecated Use `ShieldIcon` instead.
 */
export const Shield = ShieldIcon
