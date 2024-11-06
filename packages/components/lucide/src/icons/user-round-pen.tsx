import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UserRoundPen as LucideUserRoundPenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UserRoundPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundPenIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideUserRoundPenIcon} {...props} />
  ),
)

/**
 * @deprecated Use `UserRoundPenIcon` instead.
 */
export const UserRoundPen = UserRoundPenIcon
