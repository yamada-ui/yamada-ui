import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareArrowDownLeft as LucideSquareArrowDownLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareArrowDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowDownLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareArrowDownLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareArrowDownLeftIcon` instead.
 */
export const SquareArrowDownLeft = SquareArrowDownLeftIcon
