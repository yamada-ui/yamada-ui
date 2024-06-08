import { forwardRef } from "@yamada-ui/core"
import { ListMinus as ListMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListMinusProps = LucideIconProps

/**
 * `ListMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListMinus = forwardRef<ListMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListMinusIcon} {...props} />
))
