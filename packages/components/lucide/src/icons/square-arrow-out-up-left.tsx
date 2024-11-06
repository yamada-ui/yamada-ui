import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareArrowOutUpLeft as LucideSquareArrowOutUpLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareArrowOutUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowOutUpLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareArrowOutUpLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareArrowOutUpLeftIcon` instead.
 */
export const SquareArrowOutUpLeft = SquareArrowOutUpLeftIcon
