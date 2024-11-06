import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowLeftToLine as LucideArrowLeftToLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowLeftToLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowLeftToLineIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowLeftToLineIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowLeftToLineIcon` instead.
 */
export const ArrowLeftToLine = ArrowLeftToLineIcon
