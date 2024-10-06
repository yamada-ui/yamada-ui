import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListCollapse as ListCollapseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListCollapse` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListCollapse = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListCollapseIcon} {...props} />
))
