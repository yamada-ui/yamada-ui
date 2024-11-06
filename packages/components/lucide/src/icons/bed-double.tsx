import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BedDouble as LucideBedDoubleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BedDoubleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BedDoubleIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBedDoubleIcon} {...props} />,
)

/**
 * @deprecated Use `BedDoubleIcon` instead.
 */
export const BedDouble = BedDoubleIcon
