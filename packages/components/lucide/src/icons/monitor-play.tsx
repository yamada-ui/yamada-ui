import { forwardRef } from "@yamada-ui/core"
import { MonitorPlay as MonitorPlayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `MonitorPlay` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorPlay = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MonitorPlayIcon} {...props} />
))
