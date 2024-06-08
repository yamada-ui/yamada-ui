import { forwardRef } from "@yamada-ui/core"
import { ListTree as ListTreeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListTreeProps = LucideIconProps

/**
 * `ListTree` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListTree = forwardRef<ListTreeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListTreeIcon} {...props} />
))
