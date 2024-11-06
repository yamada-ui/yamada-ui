import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowBigLeftDash as LucideArrowBigLeftDashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowBigLeftDashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigLeftDashIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowBigLeftDashIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowBigLeftDashIcon` instead.
 */
export const ArrowBigLeftDash = ArrowBigLeftDashIcon
