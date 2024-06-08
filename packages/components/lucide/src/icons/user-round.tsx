import { forwardRef } from "@yamada-ui/core"
import { UserRound as UserRoundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UserRoundProps = LucideIconProps

/**
 * `UserRound` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRound = forwardRef<UserRoundProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UserRoundIcon} {...props} />
))
