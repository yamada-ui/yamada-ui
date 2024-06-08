import { forwardRef } from "@yamada-ui/core"
import { Route as RouteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RouteProps = LucideIconProps

/**
 * `Route` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Route = forwardRef<RouteProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RouteIcon} {...props} />
))
