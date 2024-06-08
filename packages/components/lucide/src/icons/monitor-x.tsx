import { forwardRef } from "@yamada-ui/core"
import { MonitorX as MonitorXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MonitorXProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorX = forwardRef<MonitorXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MonitorXIcon} {...props} />
))
