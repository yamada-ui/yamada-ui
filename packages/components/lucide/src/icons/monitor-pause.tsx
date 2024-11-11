import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { MonitorPause as OriginalMonitorPause } from "lucide-react"

/**
 * `MonitorPauseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorPauseIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalMonitorPause} {...props} />
))

/**
 * `MonitorPause` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MonitorPauseIcon` instead.
 */
export const MonitorPause = MonitorPauseIcon
