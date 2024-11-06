import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorPlay as LucideMonitorPlayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorPlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorPlayIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMonitorPlayIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MonitorPlayIcon` instead.
 */
export const MonitorPlay = MonitorPlayIcon
