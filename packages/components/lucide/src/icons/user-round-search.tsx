import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UserRoundSearch as LucideUserRoundSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UserRoundSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundSearchIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideUserRoundSearchIcon} {...props} />
  ),
)

/**
 * @deprecated Use `UserRoundSearchIcon` instead.
 */
export const UserRoundSearch = UserRoundSearchIcon
