import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowUpWideNarrow as LucideArrowUpWideNarrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowUpWideNarrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpWideNarrowIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowUpWideNarrowIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowUpWideNarrowIcon` instead.
 */
export const ArrowUpWideNarrow = ArrowUpWideNarrowIcon
