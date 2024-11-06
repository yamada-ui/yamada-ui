import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowBigUpDash as LucideArrowBigUpDashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowBigUpDashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigUpDashIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowBigUpDashIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowBigUpDashIcon` instead.
 */
export const ArrowBigUpDash = ArrowBigUpDashIcon
