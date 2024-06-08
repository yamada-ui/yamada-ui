import { forwardRef } from "@yamada-ui/core"
import { Waypoints as WaypointsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WaypointsProps = LucideIconProps

/**
 * `Waypoints` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Waypoints = forwardRef<WaypointsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WaypointsIcon} {...props} />
))
