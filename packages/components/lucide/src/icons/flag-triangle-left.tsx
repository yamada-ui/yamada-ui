import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FlagTriangleLeft as LucideFlagTriangleLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlagTriangleLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlagTriangleLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFlagTriangleLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FlagTriangleLeftIcon` instead.
 */
export const FlagTriangleLeft = FlagTriangleLeftIcon
