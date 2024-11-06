import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UserPen as LucideUserPenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UserPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserPenIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideUserPenIcon} {...props} />
))

/**
 * @deprecated Use `UserPenIcon` instead.
 */
export const UserPen = UserPenIcon
