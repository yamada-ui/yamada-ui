import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorX as LucideMonitorXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMonitorXIcon} {...props} />
))

/**
 * @deprecated Use `MonitorXIcon` instead.
 */
export const MonitorX = MonitorXIcon
