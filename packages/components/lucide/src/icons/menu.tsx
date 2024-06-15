import { forwardRef } from "@yamada-ui/core"
import { Menu as MenuIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MenuProps = LucideIconProps

/**
 * `Menu` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Menu = forwardRef<MenuProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MenuIcon} {...props} />
))
