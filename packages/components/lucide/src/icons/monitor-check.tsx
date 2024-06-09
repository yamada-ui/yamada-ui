import { forwardRef } from "@yamada-ui/core"
import { MonitorCheck as MonitorCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MonitorCheckProps = LucideIconProps

/**
 * `MonitorCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorCheck = forwardRef<MonitorCheckProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MonitorCheckIcon} {...props} />,
)
