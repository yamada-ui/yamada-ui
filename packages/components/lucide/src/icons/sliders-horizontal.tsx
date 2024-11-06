import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SlidersHorizontal as LucideSlidersHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SlidersHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SlidersHorizontalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSlidersHorizontalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SlidersHorizontalIcon` instead.
 */
export const SlidersHorizontal = SlidersHorizontalIcon
