import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowUpToLine as LucideArrowUpToLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowUpToLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpToLineIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowUpToLineIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowUpToLineIcon` instead.
 */
export const ArrowUpToLine = ArrowUpToLineIcon
