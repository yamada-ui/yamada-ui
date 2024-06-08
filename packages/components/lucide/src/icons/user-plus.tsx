import { forwardRef } from "@yamada-ui/core"
import { UserPlus as UserPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UserPlusProps = LucideIconProps

/**
 * `UserPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserPlus = forwardRef<UserPlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UserPlusIcon} {...props} />
))
