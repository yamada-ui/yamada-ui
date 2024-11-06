import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareArrowOutUpRight as LucideSquareArrowOutUpRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareArrowOutUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowOutUpRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareArrowOutUpRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareArrowOutUpRightIcon` instead.
 */
export const SquareArrowOutUpRight = SquareArrowOutUpRightIcon
