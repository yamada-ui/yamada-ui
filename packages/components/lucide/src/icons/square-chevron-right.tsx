import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareChevronRight as LucideSquareChevronRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareChevronRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareChevronRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareChevronRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareChevronRightIcon` instead.
 */
export const SquareChevronRight = SquareChevronRightIcon
