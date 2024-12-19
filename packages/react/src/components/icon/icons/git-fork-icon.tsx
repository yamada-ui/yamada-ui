import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GitFork } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitForkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitForkIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={GitFork} className={cx("ui-lucide-icon", className)} {...rest} />
)
