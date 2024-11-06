import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UserRoundCheck as LucideUserRoundCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UserRoundCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideUserRoundCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `UserRoundCheckIcon` instead.
 */
export const UserRoundCheck = UserRoundCheckIcon
