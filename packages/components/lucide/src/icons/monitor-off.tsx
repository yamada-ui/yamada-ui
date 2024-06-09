import { forwardRef } from "@yamada-ui/core"
import { MonitorOff as MonitorOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MonitorOffProps = LucideIconProps

/**
 * `MonitorOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorOff = forwardRef<MonitorOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MonitorOffIcon} {...props} />
))
