import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GitCommitHorizontal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitCommitHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCommitHorizontalIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={GitCommitHorizontal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
