import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowDownWideNarrow as LucideArrowDownWideNarrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowDownWideNarrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownWideNarrowIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowDownWideNarrowIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowDownWideNarrowIcon` instead.
 */
export const ArrowDownWideNarrow = ArrowDownWideNarrowIcon
