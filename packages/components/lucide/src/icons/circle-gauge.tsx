import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleGauge as LucideCircleGaugeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleGaugeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleGaugeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleGaugeIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleGaugeIcon` instead.
 */
export const CircleGauge = CircleGaugeIcon
