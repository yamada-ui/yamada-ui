import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowUpFromDot as LucideArrowUpFromDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowUpFromDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpFromDotIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowUpFromDotIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowUpFromDotIcon` instead.
 */
export const ArrowUpFromDot = ArrowUpFromDotIcon
