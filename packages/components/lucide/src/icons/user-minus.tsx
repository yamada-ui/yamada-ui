import { forwardRef } from "@yamada-ui/core"
import { UserMinus as UserMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UserMinusProps = LucideIconProps

/**
 * `UserMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserMinus = forwardRef<UserMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UserMinusIcon} {...props} />
))
