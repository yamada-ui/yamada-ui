import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TriangleRight as LucideTriangleRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TriangleRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TriangleRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTriangleRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TriangleRightIcon` instead.
 */
export const TriangleRight = TriangleRightIcon
