import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorPause as LucideMonitorPauseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorPauseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorPauseIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMonitorPauseIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MonitorPauseIcon` instead.
 */
export const MonitorPause = MonitorPauseIcon
