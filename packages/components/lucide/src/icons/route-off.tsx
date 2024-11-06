import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RouteOff as LucideRouteOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RouteOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RouteOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRouteOffIcon} {...props} />
))

/**
 * @deprecated Use `RouteOffIcon` instead.
 */
export const RouteOff = RouteOffIcon
