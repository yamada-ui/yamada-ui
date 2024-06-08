import { forwardRef } from "@yamada-ui/core"
import { Monitor as MonitorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MonitorProps = LucideIconProps

/**
 * `Monitor` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Monitor = forwardRef<MonitorProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MonitorIcon} {...props} />
))
