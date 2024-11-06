import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UsersRound as LucideUsersRoundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UsersRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UsersRoundIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideUsersRoundIcon} {...props} />,
)

/**
 * @deprecated Use `UsersRoundIcon` instead.
 */
export const UsersRound = UsersRoundIcon
