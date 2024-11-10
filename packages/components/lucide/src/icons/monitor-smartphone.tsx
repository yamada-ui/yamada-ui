import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { MonitorSmartphone as OriginalMonitorSmartphone } from "lucide-react"

/**
 * `MonitorSmartphoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorSmartphoneIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalMonitorSmartphone} {...props} />,
)

/**
 * `MonitorSmartphone` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MonitorSmartphoneIcon` instead.
 */
export const MonitorSmartphone = MonitorSmartphoneIcon
