import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CornerRightDown as LucideCornerRightDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CornerRightDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerRightDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCornerRightDownIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CornerRightDownIcon` instead.
 */
export const CornerRightDown = CornerRightDownIcon
