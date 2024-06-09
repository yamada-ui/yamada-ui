import { forwardRef } from "@yamada-ui/core"
import { MonitorSpeaker as MonitorSpeakerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MonitorSpeakerProps = LucideIconProps

/**
 * `MonitorSpeaker` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorSpeaker = forwardRef<MonitorSpeakerProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MonitorSpeakerIcon} {...props} />,
)
