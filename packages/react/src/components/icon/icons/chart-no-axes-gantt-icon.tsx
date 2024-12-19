import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartNoAxesGantt } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartNoAxesGanttIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartNoAxesGanttIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChartNoAxesGantt}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
