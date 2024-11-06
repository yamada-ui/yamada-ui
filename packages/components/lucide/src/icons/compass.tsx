import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Compass as LucideCompassIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CompassIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CompassIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCompassIcon} {...props} />
))

/**
 * @deprecated Use `CompassIcon` instead.
 */
export const Compass = CompassIcon
