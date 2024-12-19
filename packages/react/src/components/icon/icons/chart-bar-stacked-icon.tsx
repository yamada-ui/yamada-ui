import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ChartBarStacked } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ChartBarStackedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChartBarStackedIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ChartBarStacked}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
