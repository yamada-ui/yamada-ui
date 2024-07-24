import { forwardRef } from "@yamada-ui/core"
import { UserPen as UserPenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UserPenProps = LucideIconProps

/**
 * `UserPen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserPen = forwardRef<UserPenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UserPenIcon} {...props} />
))
