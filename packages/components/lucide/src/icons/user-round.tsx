import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UserRound as LucideUserRoundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UserRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideUserRoundIcon} {...props} />,
)

/**
 * @deprecated Use `UserRoundIcon` instead.
 */
export const UserRound = UserRoundIcon
