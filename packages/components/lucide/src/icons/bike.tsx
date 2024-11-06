import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bike as LucideBikeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BikeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BikeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBikeIcon} {...props} />
))

/**
 * @deprecated Use `BikeIcon` instead.
 */
export const Bike = BikeIcon
