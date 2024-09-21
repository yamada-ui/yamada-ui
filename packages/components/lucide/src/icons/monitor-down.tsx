import { forwardRef } from "@yamada-ui/core"
import { MonitorDown as MonitorDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `MonitorDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorDown = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MonitorDownIcon} {...props} />
))
