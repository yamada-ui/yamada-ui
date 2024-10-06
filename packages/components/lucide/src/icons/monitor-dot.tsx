import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MonitorDot as MonitorDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorDot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorDot = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MonitorDotIcon} {...props} />
))
