import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareChevronDown as LucideSquareChevronDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareChevronDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareChevronDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSquareChevronDownIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SquareChevronDownIcon` instead.
 */
export const SquareChevronDown = SquareChevronDownIcon
