import { forwardRef } from "@yamada-ui/core"
import { TrendingUpDown as TrendingUpDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `TrendingUpDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrendingUpDown = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TrendingUpDownIcon} {...props} />,
)
