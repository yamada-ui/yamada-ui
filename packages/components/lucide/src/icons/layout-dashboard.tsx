import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { LayoutDashboard as OriginalLayoutDashboard } from "lucide-react"

/**
 * `LayoutDashboardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutDashboardIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalLayoutDashboard} {...props} />,
)

/**
 * `LayoutDashboard` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `LayoutDashboardIcon` instead.
 */
export const LayoutDashboard = LayoutDashboardIcon
