import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TrendingUp } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TrendingUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrendingUpIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={TrendingUp} className={cx("ui-lucide-icon", className)} {...rest} />
)
