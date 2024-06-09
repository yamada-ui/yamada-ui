import { forwardRef } from "@yamada-ui/core"
import { ListX as ListXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListXProps = LucideIconProps

/**
 * `ListX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListX = forwardRef<ListXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListXIcon} {...props} />
))
