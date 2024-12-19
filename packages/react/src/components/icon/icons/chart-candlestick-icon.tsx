import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartCandlestick } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartCandlestickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartCandlestickIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChartCandlestick}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
