import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { DollarSign as LucideDollarSignIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DollarSignIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DollarSignIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideDollarSignIcon} {...props} />,
)

/**
 * @deprecated Use `DollarSignIcon` instead.
 */
export const DollarSign = DollarSignIcon
