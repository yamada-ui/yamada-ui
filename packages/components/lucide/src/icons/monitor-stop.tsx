import { forwardRef } from "@yamada-ui/core"
import { MonitorStop as MonitorStopIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MonitorStopProps = LucideIconProps

/**
 * `MonitorStop` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorStop = forwardRef<MonitorStopProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MonitorStopIcon} {...props} />
))
