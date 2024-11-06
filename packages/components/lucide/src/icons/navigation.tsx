import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Navigation as LucideNavigationIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NavigationIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NavigationIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideNavigationIcon} {...props} />,
)

/**
 * @deprecated Use `NavigationIcon` instead.
 */
export const Navigation = NavigationIcon
