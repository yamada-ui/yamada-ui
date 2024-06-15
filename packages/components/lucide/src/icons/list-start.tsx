import { forwardRef } from "@yamada-ui/core"
import { ListStart as ListStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListStartProps = LucideIconProps

/**
 * `ListStart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListStart = forwardRef<ListStartProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListStartIcon} {...props} />
))
