import { forwardRef } from "@yamada-ui/core"
import { ListPlus as ListPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListPlusProps = LucideIconProps

/**
 * `ListPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListPlus = forwardRef<ListPlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListPlusIcon} {...props} />
))
