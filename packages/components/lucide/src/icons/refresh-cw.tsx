import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RefreshCw as LucideRefreshCwIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RefreshCwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefreshCwIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideRefreshCwIcon} {...props} />,
)

/**
 * @deprecated Use `RefreshCwIcon` instead.
 */
export const RefreshCw = RefreshCwIcon
