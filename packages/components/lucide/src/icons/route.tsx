import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Route as LucideRouteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RouteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RouteIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRouteIcon} {...props} />
))

/**
 * @deprecated Use `RouteIcon` instead.
 */
export const Route = RouteIcon
