import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Earth as LucideEarthIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `EarthIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EarthIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideEarthIcon} {...props} />
))

/**
 * @deprecated Use `EarthIcon` instead.
 */
export const Earth = EarthIcon
