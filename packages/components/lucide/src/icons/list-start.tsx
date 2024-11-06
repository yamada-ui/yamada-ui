import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListStart as LucideListStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListStartIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideListStartIcon} {...props} />,
)

/**
 * @deprecated Use `ListStartIcon` instead.
 */
export const ListStart = ListStartIcon
