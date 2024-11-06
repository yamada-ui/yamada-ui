import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RefreshCcw as LucideRefreshCcwIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RefreshCcwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RefreshCcwIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideRefreshCcwIcon} {...props} />,
)

/**
 * @deprecated Use `RefreshCcwIcon` instead.
 */
export const RefreshCcw = RefreshCcwIcon
