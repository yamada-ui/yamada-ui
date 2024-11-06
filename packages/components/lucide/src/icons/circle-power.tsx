import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CirclePower as LucideCirclePowerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CirclePowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CirclePowerIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCirclePowerIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CirclePowerIcon` instead.
 */
export const CirclePower = CirclePowerIcon
