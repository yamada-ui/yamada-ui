import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleChevronRight as LucideCircleChevronRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleChevronRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleChevronRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleChevronRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleChevronRightIcon` instead.
 */
export const CircleChevronRight = CircleChevronRightIcon
