import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TrafficCone as LucideTrafficConeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TrafficConeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrafficConeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTrafficConeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TrafficConeIcon` instead.
 */
export const TrafficCone = TrafficConeIcon
