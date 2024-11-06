import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Monitor as LucideMonitorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MonitorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMonitorIcon} {...props} />
))

/**
 * @deprecated Use `MonitorIcon` instead.
 */
export const Monitor = MonitorIcon
