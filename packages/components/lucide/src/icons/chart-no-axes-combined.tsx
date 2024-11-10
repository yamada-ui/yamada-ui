import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ChartNoAxesCombined as OriginalChartNoAxesCombined } from "lucide-react"

/**
 * `ChartNoAxesCombinedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesCombinedIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalChartNoAxesCombined} {...props} />
  ),
)

/**
 * `ChartNoAxesCombined` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChartNoAxesCombinedIcon` instead.
 */
export const ChartNoAxesCombined = ChartNoAxesCombinedIcon
