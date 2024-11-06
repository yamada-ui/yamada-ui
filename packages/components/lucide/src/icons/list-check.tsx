import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListCheck as LucideListCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideListCheckIcon} {...props} />,
)

/**
 * @deprecated Use `ListCheckIcon` instead.
 */
export const ListCheck = ListCheckIcon
