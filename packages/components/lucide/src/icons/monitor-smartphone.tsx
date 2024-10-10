import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorSmartphone as MonitorSmartphoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorSmartphone` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorSmartphone = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MonitorSmartphoneIcon} {...props} />
  ),
)
