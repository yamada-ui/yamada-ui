import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GitCompareArrows } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitCompareArrowsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCompareArrowsIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={GitCompareArrows}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
