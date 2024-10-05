import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ChartBarStacked as ChartBarStackedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ChartBarStacked` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartBarStacked = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ChartBarStackedIcon} {...props} />,
)
