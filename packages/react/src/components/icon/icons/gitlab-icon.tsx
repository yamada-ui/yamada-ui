import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Gitlab } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitlabIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitlabIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Gitlab} className={cx("ui-lucide-icon", className)} {...rest} />
)
