import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { TimerOff } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `TimerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TimerOffIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={TimerOff} className={cx("ui-lucide-icon", className)} {...rest} />
)
