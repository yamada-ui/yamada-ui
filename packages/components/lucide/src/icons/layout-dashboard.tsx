import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LayoutDashboard as LucideLayoutDashboardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LayoutDashboardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutDashboardIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideLayoutDashboardIcon} {...props} />
  ),
)

/**
 * @deprecated Use `LayoutDashboardIcon` instead.
 */
export const LayoutDashboard = LayoutDashboardIcon
