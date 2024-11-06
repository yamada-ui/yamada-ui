import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowUpNarrowWide as LucideArrowUpNarrowWideIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowUpNarrowWideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpNarrowWideIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowUpNarrowWideIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowUpNarrowWideIcon` instead.
 */
export const ArrowUpNarrowWide = ArrowUpNarrowWideIcon
