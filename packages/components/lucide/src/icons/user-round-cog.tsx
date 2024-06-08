import { forwardRef } from "@yamada-ui/core"
import { UserRoundCog as UserRoundCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UserRoundCogProps = LucideIconProps

/**
 * `UserRoundCog` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundCog = forwardRef<UserRoundCogProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={UserRoundCogIcon} {...props} />,
)
