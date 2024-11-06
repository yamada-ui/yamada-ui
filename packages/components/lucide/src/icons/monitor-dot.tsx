import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorDot as LucideMonitorDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorDotIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMonitorDotIcon} {...props} />,
)

/**
 * @deprecated Use `MonitorDotIcon` instead.
 */
export const MonitorDot = MonitorDotIcon
