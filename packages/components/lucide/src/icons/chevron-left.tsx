import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChevronLeft as LucideChevronLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChevronLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideChevronLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ChevronLeftIcon` instead.
 */
export const ChevronLeft = ChevronLeftIcon
