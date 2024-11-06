import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Waypoints as LucideWaypointsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WaypointsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WaypointsIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideWaypointsIcon} {...props} />,
)

/**
 * @deprecated Use `WaypointsIcon` instead.
 */
export const Waypoints = WaypointsIcon
