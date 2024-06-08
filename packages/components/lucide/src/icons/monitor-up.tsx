import { forwardRef } from "@yamada-ui/core"
import { MonitorUp as MonitorUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MonitorUpProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MonitorUp = forwardRef<MonitorUpProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MonitorUpIcon} {...props} />
))
