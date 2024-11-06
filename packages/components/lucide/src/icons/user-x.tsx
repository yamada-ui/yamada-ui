import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UserX as LucideUserXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UserXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideUserXIcon} {...props} />
))

/**
 * @deprecated Use `UserXIcon` instead.
 */
export const UserX = UserXIcon
