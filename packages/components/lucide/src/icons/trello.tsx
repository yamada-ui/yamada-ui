import { forwardRef } from "@yamada-ui/core"
import { Trello as TrelloIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TrelloProps = LucideIconProps

/**
 * `Trello` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Trello = forwardRef<TrelloProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TrelloIcon} {...props} />
))
