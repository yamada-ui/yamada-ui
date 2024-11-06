import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowLeftRight as LucideArrowLeftRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowLeftRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowLeftRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowLeftRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowLeftRightIcon` instead.
 */
export const ArrowLeftRight = ArrowLeftRightIcon
