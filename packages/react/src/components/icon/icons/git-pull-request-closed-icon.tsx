import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GitPullRequestClosed } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitPullRequestClosedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestClosedIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={GitPullRequestClosed}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
