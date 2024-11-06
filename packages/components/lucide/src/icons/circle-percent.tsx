import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CirclePercent as LucideCirclePercentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CirclePercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePercentIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCirclePercentIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CirclePercentIcon` instead.
 */
export const CirclePercent = CirclePercentIcon
