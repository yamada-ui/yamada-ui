import { forwardRef } from "@yamada-ui/core"
import { ListOrdered as ListOrderedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListOrderedProps = LucideIconProps

/**
 * `ListOrdered` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListOrdered = forwardRef<ListOrderedProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListOrderedIcon} {...props} />
))
