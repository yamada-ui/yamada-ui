import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListFilter as LucideListFilterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListFilterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListFilterIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideListFilterIcon} {...props} />,
)

/**
 * @deprecated Use `ListFilterIcon` instead.
 */
export const ListFilter = ListFilterIcon
