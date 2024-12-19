import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Goal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GoalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GoalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Goal} className={cx("ui-lucide-icon", className)} {...rest} />
)
