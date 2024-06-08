import { forwardRef } from "@yamada-ui/core"
import { UsersRound as UsersRoundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UsersRoundProps = LucideIconProps

/**
 * `UsersRound` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UsersRound = forwardRef<UsersRoundProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UsersRoundIcon} {...props} />
))
