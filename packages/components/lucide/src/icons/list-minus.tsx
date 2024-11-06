import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ListMinus as LucideListMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ListMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideListMinusIcon} {...props} />,
)

/**
 * @deprecated Use `ListMinusIcon` instead.
 */
export const ListMinus = ListMinusIcon
