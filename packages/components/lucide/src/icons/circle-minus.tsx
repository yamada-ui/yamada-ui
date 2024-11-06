import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleMinus as LucideCircleMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleMinusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleMinusIcon` instead.
 */
export const CircleMinus = CircleMinusIcon
