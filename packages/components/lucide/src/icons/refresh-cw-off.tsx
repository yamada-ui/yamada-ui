import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RefreshCwOff as LucideRefreshCwOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RefreshCwOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefreshCwOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideRefreshCwOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `RefreshCwOffIcon` instead.
 */
export const RefreshCwOff = RefreshCwOffIcon
