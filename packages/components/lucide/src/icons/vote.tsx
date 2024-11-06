import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Vote as LucideVoteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VoteIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideVoteIcon} {...props} />
))

/**
 * @deprecated Use `VoteIcon` instead.
 */
export const Vote = VoteIcon
