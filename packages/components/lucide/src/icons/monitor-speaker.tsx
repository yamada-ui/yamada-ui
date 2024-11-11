import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { MonitorSpeaker as OriginalMonitorSpeaker } from "lucide-react"

/**
 * `MonitorSpeakerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorSpeakerIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalMonitorSpeaker} {...props} />
))

/**
 * `MonitorSpeaker` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MonitorSpeakerIcon` instead.
 */
export const MonitorSpeaker = MonitorSpeakerIcon
