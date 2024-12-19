import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Timer } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TimerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TimerIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Timer} className={cx("ui-lucide-icon", className)} {...rest} />
)
