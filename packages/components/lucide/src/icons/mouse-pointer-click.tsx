import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MousePointerClick as LucideMousePointerClickIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MousePointerClickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MousePointerClickIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMousePointerClickIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MousePointerClickIcon` instead.
 */
export const MousePointerClick = MousePointerClickIcon
