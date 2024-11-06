import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorCheck as LucideMonitorCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMonitorCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MonitorCheckIcon` instead.
 */
export const MonitorCheck = MonitorCheckIcon
