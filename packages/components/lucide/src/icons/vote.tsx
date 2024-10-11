import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Vote as VoteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Vote` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Vote = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VoteIcon} {...props} />
))
