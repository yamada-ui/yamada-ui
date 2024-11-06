import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorStop as LucideMonitorStopIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorStopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorStopIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMonitorStopIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MonitorStopIcon` instead.
 */
export const MonitorStop = MonitorStopIcon
