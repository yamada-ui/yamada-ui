import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowBigDownDash as LucideArrowBigDownDashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowBigDownDashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigDownDashIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowBigDownDashIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowBigDownDashIcon` instead.
 */
export const ArrowBigDownDash = ArrowBigDownDashIcon
