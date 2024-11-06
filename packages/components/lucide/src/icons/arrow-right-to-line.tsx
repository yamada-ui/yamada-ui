import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowRightToLine as LucideArrowRightToLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowRightToLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowRightToLineIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowRightToLineIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowRightToLineIcon` instead.
 */
export const ArrowRightToLine = ArrowRightToLineIcon
