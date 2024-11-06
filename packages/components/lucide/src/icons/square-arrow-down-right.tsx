import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareArrowDownRight as LucideSquareArrowDownRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareArrowDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowDownRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareArrowDownRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareArrowDownRightIcon` instead.
 */
export const SquareArrowDownRight = SquareArrowDownRightIcon
