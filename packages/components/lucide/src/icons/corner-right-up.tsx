import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CornerRightUp as LucideCornerRightUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CornerRightUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerRightUpIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCornerRightUpIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CornerRightUpIcon` instead.
 */
export const CornerRightUp = CornerRightUpIcon
