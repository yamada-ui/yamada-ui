import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleArrowOutDownLeft as LucideCircleArrowOutDownLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleArrowOutDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleArrowOutDownLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleArrowOutDownLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleArrowOutDownLeftIcon` instead.
 */
export const CircleArrowOutDownLeft = CircleArrowOutDownLeftIcon
