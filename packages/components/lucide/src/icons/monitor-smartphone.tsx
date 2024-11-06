import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorSmartphone as LucideMonitorSmartphoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorSmartphoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorSmartphoneIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMonitorSmartphoneIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MonitorSmartphoneIcon` instead.
 */
export const MonitorSmartphone = MonitorSmartphoneIcon
