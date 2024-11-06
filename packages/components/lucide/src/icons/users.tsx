import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Users as LucideUsersIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UsersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UsersIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideUsersIcon} {...props} />
))

/**
 * @deprecated Use `UsersIcon` instead.
 */
export const Users = UsersIcon
