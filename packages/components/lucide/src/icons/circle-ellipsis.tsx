import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CircleEllipsis as LucideCircleEllipsisIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CircleEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleEllipsisIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCircleEllipsisIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CircleEllipsisIcon` instead.
 */
export const CircleEllipsis = CircleEllipsisIcon
