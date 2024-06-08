import { forwardRef } from "@yamada-ui/core"
import { RouteOff as RouteOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RouteOffProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RouteOff = forwardRef<RouteOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RouteOffIcon} {...props} />
))
