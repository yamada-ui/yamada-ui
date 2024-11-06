import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorSpeaker as LucideMonitorSpeakerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorSpeakerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorSpeakerIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMonitorSpeakerIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MonitorSpeakerIcon` instead.
 */
export const MonitorSpeaker = MonitorSpeakerIcon
