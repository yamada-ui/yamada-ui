import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartPie } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartPieIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartPieIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ChartPie} className={cx("ui-lucide-icon", className)} {...rest} />
)
