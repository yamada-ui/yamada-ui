import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListPlus as LucideListPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListPlusIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideListPlusIcon} {...props} />
))

/**
 * @deprecated Use `ListPlusIcon` instead.
 */
export const ListPlus = ListPlusIcon
