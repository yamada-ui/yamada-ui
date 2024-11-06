import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShieldX as LucideShieldXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShieldXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideShieldXIcon} {...props} />
))

/**
 * @deprecated Use `ShieldXIcon` instead.
 */
export const ShieldX = ShieldXIcon
