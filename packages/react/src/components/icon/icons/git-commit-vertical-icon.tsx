import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GitCommitVertical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitCommitVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitCommitVerticalIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={GitCommitVertical}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
