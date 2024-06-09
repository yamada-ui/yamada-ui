import { forwardRef } from "@yamada-ui/core"
import { MonitorPlay as MonitorPlayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MonitorPlayProps = LucideIconProps

/**
 * `MonitorPlay` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorPlay = forwardRef<MonitorPlayProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MonitorPlayIcon} {...props} />
))
