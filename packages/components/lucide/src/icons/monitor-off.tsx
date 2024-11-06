import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorOff as LucideMonitorOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMonitorOffIcon} {...props} />,
)

/**
 * @deprecated Use `MonitorOffIcon` instead.
 */
export const MonitorOff = MonitorOffIcon
