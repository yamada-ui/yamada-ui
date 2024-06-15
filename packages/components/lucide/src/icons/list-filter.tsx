import { forwardRef } from "@yamada-ui/core"
import { ListFilter as ListFilterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListFilterProps = LucideIconProps

/**
 * `ListFilter` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListFilter = forwardRef<ListFilterProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListFilterIcon} {...props} />
))
