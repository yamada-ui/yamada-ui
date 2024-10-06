import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Gauge as GaugeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Gauge` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Gauge = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GaugeIcon} {...props} />
))
