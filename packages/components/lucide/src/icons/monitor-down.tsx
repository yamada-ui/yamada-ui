import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorDown as LucideMonitorDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMonitorDownIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MonitorDownIcon` instead.
 */
export const MonitorDown = MonitorDownIcon
