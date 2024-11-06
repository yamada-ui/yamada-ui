import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Glasses as LucideGlassesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GlassesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GlassesIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGlassesIcon} {...props} />
))

/**
 * @deprecated Use `GlassesIcon` instead.
 */
export const Glasses = GlassesIcon
