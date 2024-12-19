import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GitCompare } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitCompareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCompareIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={GitCompare} className={cx("ui-lucide-icon", className)} {...rest} />
)
