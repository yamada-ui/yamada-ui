import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorCog as LucideMonitorCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorCogIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMonitorCogIcon} {...props} />,
)

/**
 * @deprecated Use `MonitorCogIcon` instead.
 */
export const MonitorCog = MonitorCogIcon
