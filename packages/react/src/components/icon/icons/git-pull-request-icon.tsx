import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GitPullRequest } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitPullRequestIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={GitPullRequest}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
