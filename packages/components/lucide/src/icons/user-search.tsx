import { forwardRef } from "@yamada-ui/core"
import { UserSearch as UserSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UserSearchProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserSearch = forwardRef<UserSearchProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UserSearchIcon} {...props} />
))
