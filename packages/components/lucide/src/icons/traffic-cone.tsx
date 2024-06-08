import { forwardRef } from "@yamada-ui/core"
import { TrafficCone as TrafficConeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TrafficConeProps = LucideIconProps

/**
 * `TrafficCone` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrafficCone = forwardRef<TrafficConeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TrafficConeIcon} {...props} />
))
