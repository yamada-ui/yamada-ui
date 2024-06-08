import { forwardRef } from "@yamada-ui/core"
import { ListEnd as ListEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListEndProps = LucideIconProps

/**
 * `ListEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListEnd = forwardRef<ListEndProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListEndIcon} {...props} />
))
