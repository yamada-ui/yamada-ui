import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartGantt } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartGanttIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartGanttIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ChartGantt} className={cx("ui-lucide-icon", className)} {...rest} />
)
