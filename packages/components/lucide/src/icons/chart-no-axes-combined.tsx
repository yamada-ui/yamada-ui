import { forwardRef } from "@yamada-ui/core"
import { ChartNoAxesCombined as ChartNoAxesCombinedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `ChartNoAxesCombined` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesCombined = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ChartNoAxesCombinedIcon} {...props} />
  ),
)
