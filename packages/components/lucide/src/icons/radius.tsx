import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Radius as LucideRadiusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RadiusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadiusIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRadiusIcon} {...props} />
))

/**
 * @deprecated Use `RadiusIcon` instead.
 */
export const Radius = RadiusIcon
