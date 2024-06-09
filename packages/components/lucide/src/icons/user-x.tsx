import { forwardRef } from "@yamada-ui/core"
import { UserX as UserXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UserXProps = LucideIconProps

/**
 * `UserX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserX = forwardRef<UserXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UserXIcon} {...props} />
))
