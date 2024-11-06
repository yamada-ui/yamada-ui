import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { User as LucideUserIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideUserIcon} {...props} />
))

/**
 * @deprecated Use `UserIcon` instead.
 */
export const User = UserIcon
