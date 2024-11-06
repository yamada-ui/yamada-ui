import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MousePointerBan as LucideMousePointerBanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MousePointerBanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MousePointerBanIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMousePointerBanIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MousePointerBanIcon` instead.
 */
export const MousePointerBan = MousePointerBanIcon
