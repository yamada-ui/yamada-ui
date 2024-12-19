import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TrendingDown } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TrendingDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrendingDownIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={TrendingDown}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
