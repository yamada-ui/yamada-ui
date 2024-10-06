import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UsersRound as UsersRoundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UsersRound` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UsersRound = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UsersRoundIcon} {...props} />
))
