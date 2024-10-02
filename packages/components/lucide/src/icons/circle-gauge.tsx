import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleGauge as CircleGaugeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleGauge` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleGauge = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CircleGaugeIcon} {...props} />
))
