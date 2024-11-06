import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UserRoundPlus as LucideUserRoundPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UserRoundPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundPlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideUserRoundPlusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `UserRoundPlusIcon` instead.
 */
export const UserRoundPlus = UserRoundPlusIcon
