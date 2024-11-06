import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Navigation2Off as LucideNavigation2OffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Navigation2OffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Navigation2OffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideNavigation2OffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `Navigation2OffIcon` instead.
 */
export const Navigation2Off = Navigation2OffIcon
