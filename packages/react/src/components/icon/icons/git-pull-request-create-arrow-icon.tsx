import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GitPullRequestCreateArrow } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitPullRequestCreateArrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestCreateArrowIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={GitPullRequestCreateArrow}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
