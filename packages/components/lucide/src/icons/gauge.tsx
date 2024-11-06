import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Gauge as LucideGaugeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GaugeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GaugeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGaugeIcon} {...props} />
))

/**
 * @deprecated Use `GaugeIcon` instead.
 */
export const Gauge = GaugeIcon
