import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartLine } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartLineIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ChartLine} className={cx("ui-lucide-icon", className)} {...rest} />
)
