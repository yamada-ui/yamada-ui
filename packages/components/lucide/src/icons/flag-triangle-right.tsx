import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FlagTriangleRight as LucideFlagTriangleRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlagTriangleRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlagTriangleRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFlagTriangleRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FlagTriangleRightIcon` instead.
 */
export const FlagTriangleRight = FlagTriangleRightIcon
