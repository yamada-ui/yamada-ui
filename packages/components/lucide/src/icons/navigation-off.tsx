import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { NavigationOff as LucideNavigationOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NavigationOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NavigationOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideNavigationOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `NavigationOffIcon` instead.
 */
export const NavigationOff = NavigationOffIcon
