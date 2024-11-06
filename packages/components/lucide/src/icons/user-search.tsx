import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UserSearch as LucideUserSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UserSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserSearchIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideUserSearchIcon} {...props} />,
)

/**
 * @deprecated Use `UserSearchIcon` instead.
 */
export const UserSearch = UserSearchIcon
