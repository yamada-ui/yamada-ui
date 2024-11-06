import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UserPlus as LucideUserPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UserPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserPlusIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideUserPlusIcon} {...props} />
))

/**
 * @deprecated Use `UserPlusIcon` instead.
 */
export const UserPlus = UserPlusIcon
