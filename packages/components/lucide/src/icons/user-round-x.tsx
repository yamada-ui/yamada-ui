import { forwardRef } from "@yamada-ui/core"
import { UserRoundX as UserRoundXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UserRoundXProps = LucideIconProps

/**
 * `UserRoundX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundX = forwardRef<UserRoundXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UserRoundXIcon} {...props} />
))
