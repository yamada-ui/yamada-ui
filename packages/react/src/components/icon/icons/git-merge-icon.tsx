import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GitMerge } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitMergeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitMergeIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={GitMerge} className={cx("ui-lucide-icon", className)} {...rest} />
)
