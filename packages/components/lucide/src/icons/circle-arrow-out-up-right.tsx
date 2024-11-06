import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleArrowOutUpRight as LucideCircleArrowOutUpRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleArrowOutUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowOutUpRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleArrowOutUpRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleArrowOutUpRightIcon` instead.
 */
export const CircleArrowOutUpRight = CircleArrowOutUpRightIcon
