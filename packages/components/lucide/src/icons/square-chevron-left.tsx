import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SquareChevronLeft as SquareChevronLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SquareChevronLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareChevronLeft = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={SquareChevronLeftIcon} {...props} />
  ),
)
