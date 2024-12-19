import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GitGraph } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitGraphIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitGraphIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={GitGraph} className={cx("ui-lucide-icon", className)} {...rest} />
)
