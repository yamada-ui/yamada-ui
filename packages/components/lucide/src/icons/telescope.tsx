import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Telescope as LucideTelescopeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TelescopeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TelescopeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideTelescopeIcon} {...props} />,
)

/**
 * @deprecated Use `TelescopeIcon` instead.
 */
export const Telescope = TelescopeIcon
