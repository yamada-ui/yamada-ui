import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Menu as LucideMenuIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MenuIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MenuIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMenuIcon} {...props} />
))

/**
 * @deprecated Use `MenuIcon` instead.
 */
export const Menu = MenuIcon
