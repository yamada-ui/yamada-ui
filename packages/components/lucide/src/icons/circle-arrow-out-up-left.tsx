import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleArrowOutUpLeft as LucideCircleArrowOutUpLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleArrowOutUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowOutUpLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleArrowOutUpLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleArrowOutUpLeftIcon` instead.
 */
export const CircleArrowOutUpLeft = CircleArrowOutUpLeftIcon
