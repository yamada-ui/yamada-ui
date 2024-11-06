import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Trello as LucideTrelloIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TrelloIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrelloIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTrelloIcon} {...props} />
))

/**
 * @deprecated Use `TrelloIcon` instead.
 */
export const Trello = TrelloIcon
