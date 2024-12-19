import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GitBranchPlus } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitBranchPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitBranchPlusIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={GitBranchPlus}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
