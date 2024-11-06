import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Strikethrough as LucideStrikethroughIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `StrikethroughIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StrikethroughIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideStrikethroughIcon} {...props} />
  ),
)

/**
 * @deprecated Use `StrikethroughIcon` instead.
 */
export const Strikethrough = StrikethroughIcon
