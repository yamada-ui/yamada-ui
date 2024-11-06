import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorUp as LucideMonitorUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorUpIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMonitorUpIcon} {...props} />,
)

/**
 * @deprecated Use `MonitorUpIcon` instead.
 */
export const MonitorUp = MonitorUpIcon
