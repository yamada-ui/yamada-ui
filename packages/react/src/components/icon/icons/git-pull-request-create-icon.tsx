import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GitPullRequestCreate } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitPullRequestCreateIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestCreateIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={GitPullRequestCreate}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
