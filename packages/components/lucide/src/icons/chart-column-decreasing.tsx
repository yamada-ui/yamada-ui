import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { ChartColumnDecreasing as OriginalChartColumnDecreasing } from "lucide-react"

/**
 * `ChartColumnDecreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartColumnDecreasingIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalChartColumnDecreasing}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `ChartColumnDecreasing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ChartColumnDecreasingIcon` instead.
 */
export const ChartColumnDecreasing = ChartColumnDecreasingIcon
