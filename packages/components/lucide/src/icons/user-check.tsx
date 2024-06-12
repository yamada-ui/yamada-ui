import { forwardRef } from "@yamada-ui/core"
import { UserCheck as UserCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UserCheckProps = LucideIconProps

/**
 * `UserCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserCheck = forwardRef<UserCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UserCheckIcon} {...props} />
))
