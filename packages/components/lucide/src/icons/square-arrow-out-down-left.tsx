import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareArrowOutDownLeft as LucideSquareArrowOutDownLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareArrowOutDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowOutDownLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareArrowOutDownLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareArrowOutDownLeftIcon` instead.
 */
export const SquareArrowOutDownLeft = SquareArrowOutDownLeftIcon
