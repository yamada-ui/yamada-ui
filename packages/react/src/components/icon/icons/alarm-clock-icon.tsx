import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { AlarmClock } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `AlarmClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmClockIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={AlarmClock} className={cx("ui-lucide-icon", className)} {...rest} />
)
