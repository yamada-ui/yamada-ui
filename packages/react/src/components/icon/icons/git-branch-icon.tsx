import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GitBranch } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitBranchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitBranchIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={GitBranch} className={cx("ui-lucide-icon", className)} {...rest} />
)
