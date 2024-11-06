import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CornerDownRight as LucideCornerDownRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CornerDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerDownRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCornerDownRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CornerDownRightIcon` instead.
 */
export const CornerDownRight = CornerDownRightIcon
