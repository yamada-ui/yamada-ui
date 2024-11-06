import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareArrowUpLeft as LucideSquareArrowUpLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareArrowUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowUpLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareArrowUpLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareArrowUpLeftIcon` instead.
 */
export const SquareArrowUpLeft = SquareArrowUpLeftIcon
