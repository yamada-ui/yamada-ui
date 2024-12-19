import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { SquareChartGantt } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `SquareChartGanttIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareChartGanttIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={SquareChartGantt}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
